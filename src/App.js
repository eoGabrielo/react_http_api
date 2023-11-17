import {useState } from 'react';
import './App.css';
import {useFetch} from "./hook/useFetch";

// npm run server -> iniciar servidor da API json na porta 3000.
// npm start -> iniciar servidor react na porta 3001.

//Url que o servidor da api vai abrir.
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  //Uso do custom Hook para faze requisilçao a API
  //{data} o return da function/codigo do hook, = useFetch() a function do hook
  //Dentro dos parametros a url da api.
  const {data} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    //Objeto para receber os valores e ser enviado para api.
    const product = {
      name: name,
      price: price,
    }; 

    //Requisiçao de envio "POST", informada a url da api junto com informaçoes do tipo de dado a ser enviado.
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product), 
    });

    //Converte o corpo da requisilçao em JSON, até aqui era OBJ/JS.
    const addedProduct = await res.json();
    
    //Adicionar mais um valor a uma variavel useState de array, é preciso dessa function com o prev!!!
    setProducts((prevProduts) => [...prevProduts, addedProduct]);

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
