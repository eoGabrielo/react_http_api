# Projeto de Formulário em React

Este projeto consiste em uma aplicação React que permite aos usuários interagir com uma lista de produtos por meio de um formulário. Os usuários podem adicionar novos produtos à lista, inserindo o nome e o preço do produto. A aplicação utiliza um hook personalizado para obter dados de uma API JSON local.

## Como Iniciar

Para executar o projeto localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone este repositório para sua máquina local.
3. Navegue até o diretório do projeto no terminal.
4. Instale as dependências com o comando:

   ```bash
   npm install
   ```

5. Inicie o servidor da API JSON:

   ```bash
   npm run server
   ```

   Isso iniciará o servidor da API JSON em [http://localhost:3000/products](http://localhost:3000/products).

6. Em uma nova janela do terminal, inicie a aplicação React:

   ```bash
   npm start
   ```

   Isso iniciará a aplicação React em [http://localhost:3001](http://localhost:3001).

## Recursos

- Visualize uma lista de produtos.
- Adicione novos produtos usando o formulário fornecido.
- Atualizações em tempo real com indicadores de carregamento.
- Tratamento de erros para solicitações de API mal-sucedidas.

## Utilização

1. Acesse a aplicação React em seu navegador em [http://localhost:3001](http://localhost:3001).
2. Explore a lista de produtos.
3. Utilize o formulário para adicionar novos produtos, inserindo o nome e o preço.
4. Envie o formulário para criar um novo produto.

## Estrutura do Projeto

- **App.js**: Componente principal contendo a lógica do formulário e da lista de produtos.
- **useFetch.js**: Hook personalizado para obter dados da API JSON local.
- **App.css**: Estilos para a aplicação.

## Dependências

- React
- [useFetch](./src/hook/useFetch.js) - Hook personalizado para obtenção de dados

## Desenvolvimento

Sinta-se à vontade para explorar, modificar e aprimorar o projeto de acordo com suas necessidades. Se encontrar problemas ou tiver sugestões, por favor entre em contato.

# Projeto de Formulário em React (Desenvolvido para Estudo Pessoal)

Esse projeto é mais uma etapa do meu aprendizado em React. A ideia aqui foi mergulhar nos conceitos, especialmente na criação de formulários e na integração com APIs no universo React.

Como o foco é mais no aprendizado do que em mostrar pro mundo, simplifiquei as partes visuais e não enchi muito o código com comentários. A intenção é que o código seja como meu caderno de estudo, onde consigo revisar e entender bem os fundamentos do React.

Enquanto mexia nesse projeto, foquei em testar, experimentar e realmente entender como o React funciona por dentro, sem ficar muito preocupado com detalhes visuais ou documentação super detalhada.

Esse projeto representa uma fase do meu aprendizado em React, e estou totalmente aberto a fazer ajustes e adicionar mais coisas à medida que continuo aperfeiçoando minhas habilidades. Se surgir alguma dúvida ou ideia, estou à disposição, porque essa troca é fundamental para meu crescimento como desenvolvedor React.
