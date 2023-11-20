import {useState } from 'react';
import './App.css';
import {useFetch} from "./hook/useFetch";

// npm run server -> iniciar servidor da API json na porta 3000.
// npm start -> iniciar servidor react na porta 3001.

//Url que o servidor da api vai abrir.
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  //Uso do custom Hook para fazer requisiçao a API
  //{data} o return da function/codigo do hook, = useFetch() a function do hook
  //Dentro dos parametros a url da api.
  //data -> Com os dados da api.
  const {data, httpConfig} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    //Objeto para receber os valores e ser enviado para api.
    const product = {
      name: name,
      price: price,
    }; 

    //Chamada para enviar os dados via method POST
    httpConfig(product, "POST")

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
     <h1>Lista de produtos</h1>
     <ul>
     {data.map((product) => (
      <li key={product.id}>{product.name} - R${product.price}</li>
     ))}
     </ul>
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
        <input type="submit" value="Criar" />
      </form>
    </div>
  );
}

export default App;
