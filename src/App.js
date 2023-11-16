import { useEffect, useState } from 'react';
import './App.css';

// npm run server -> iniciar servidor da API json na porta 3000.
// npm start -> iniciar servidor react na porta 3001.

//Url que o servidor da api vai abrir.
const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //requisição a API, busca os dados da api p/ atribuir a variavel useState "products".
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);
      const data = await res.json()
      setProducts(data);
    }

    fetchData();
  },[]);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const product = {
      //Se o valor do useState/variavel for o mesmo da chave do obj
      //pode colocar somente name, price,...
      name: name,
      price: price,
    }; 

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product), 
    });

    const addedProduct = await res.json();
    
    setProducts((prevProduts) => [...prevProduts, addedProduct]);

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
     <h1>Lista de produtos</h1>
     <ul>
     {products.map((product) => (
      <li key={product.id}>{product.name} - R${product.price}</li>
     ))}
     </ul>
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
