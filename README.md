Projeto de Formulário em React
Este projeto consiste em uma aplicação React simples que permite aos usuários interagir com uma lista de produtos por meio de um formulário. Os usuários podem adicionar novos produtos à lista, inserindo o nome e o preço do produto. A aplicação utiliza um hook personalizado para obter dados de uma API JSON local.

Como Iniciar
Para executar o projeto localmente, siga os passos abaixo:

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

Clone este repositório para sua máquina local.

Navegue até o diretório do projeto no terminal.

Instale as dependências com o comando:

bash
Copy code
npm install
Inicie o servidor da API JSON:

bash
Copy code
npm run server
Isso iniciará o servidor da API JSON em http://localhost:3000/products.

Em uma nova janela do terminal, inicie a aplicação React:

bash
Copy code
npm start
Isso iniciará a aplicação React em http://localhost:3001.

Recursos
Visualize uma lista de produtos.
Adicione novos produtos usando o formulário fornecido.
Atualizações em tempo real com indicadores de carregamento.
Tratamento de erros para solicitações de API mal-sucedidas.
Utilização
Acesse a aplicação React em seu navegador em http://localhost:3001.
Explore a lista de produtos.
Utilize o formulário para adicionar novos produtos, inserindo o nome e o preço.
Envie o formulário para criar um novo produto.
Estrutura do Projeto
App.js: Componente principal contendo a lógica do formulário e da lista de produtos.
useFetch.js: Hook personalizado para obter dados da API JSON local.
App.css: Estilos para a aplicação.
Dependências
React
useFetch - Hook personalizado para obtenção de dados
Desenvolvimento
Sinta-se à vontade para explorar, modificar e aprimorar o projeto de acordo com suas necessidades. Se encontrar problemas ou tiver sugestões, por favor entrar em contato.
