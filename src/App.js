import {useState } from 'react';
import './App.css';
import {useFetch} from "./hook/useFetch";

// npm run server -> iniciar servidor da API json na porta 3000.
// npm start -> iniciar servidor react na porta 3001.

//Url da api json local, se a porta for diferente de 3001 retorna erro
//Graças ao custom hook que tem um useState que armazena o erro de uma try and catch
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  //Uso do custom Hook para fazer requisiçao, envio post e funcionalidades.
  const {data, httpConfig, loading, error} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  const handleSubmit = async (e) =>{
    e.preventDefault();

    //Objeto para receber os valores e ser enviado para api em formato objeto json.
    const product = {
      name: name,
      price: price,
    }; 

    //Chamada para enviar os dados via method POST, custom hook
    httpConfig(product, "POST")

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      {loading && <p>CARREGANDO...</p>}
     <h1>Lista de produtos</h1>
     {error ? <p>{error}</p> : (
     <ul>
     {data.map((product) => (
      <li key={product.id}>{product.name} - R${product.price}</li>
     ))}
     </ul>
     )}
     {/*Propiedade "value" do input, recebe o useState, assim fica mais facil de manipular seu valor.*/}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Preço:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        {!loading ? <input type="submit" value="Criar"/>  : <input type="submit" disabled value="Enviando..."/> 
        }
      </form>
    </div>
  );
}

export default App;
