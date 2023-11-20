import {useState, useEffect} from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false);


  //Function que verifica se o method foi POST, se for o useState config recebe as configuração de envio/post
  //Esse function é chamada no componente, passando o objeto com os valores a ser enviado e o method
  const httpConfig = (data, method) => {
    if(method === "POST"){
      setConfig({
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      setMethod(method)
    }
  }

  //useEffect que faz a requisição de dados, busca os dados na api
  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
    }
    fetchData();
  },[url, callFetch])

  //useEffect que envia as requisiçoes via "POST".
  useEffect(()  => {
    const httpRequest = async () => {

    if(method === "POST"){
      const fetchOptions = [url, config];
      const res = await fetch(...fetchOptions)
      const json = await res.json()
      setCallFetch(json);
    }} 
    httpRequest();

  },[config, method, url])

  //Como é um hookCustom, exportamos a requisilçao que ta em "data" e o method de envio "POST" que está em httpConfig
  return{data, httpConfig};
}

