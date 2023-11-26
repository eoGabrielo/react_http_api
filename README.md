# Projeto de Formulário em React

Este projeto consiste em uma aplicação React simples que permite aos usuários interagir com uma lista de produtos por meio de um formulário. Os usuários podem adicionar novos produtos à lista, inserindo o nome e o preço do produto. A aplicação utiliza um hook personalizado para obter dados de uma API JSON local.

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

# Projeto de Formulário em React (Desenvolvido para Fins de Aprendizado Pessoal)

Este projeto foi criado como parte do meu processo de aprendizado em React. A ênfase principal foi na exploração prática dos conceitos fundamentais, especialmente na construção de formulários e na integração com APIs em um ambiente React.

Dado o caráter educacional pessoal deste projeto, optei por simplificar os detalhes visuais e minimizar comentários extensos no código. A intenção é que o código sirva como uma ferramenta de revisão para mim mesmo, promovendo uma compreensão profunda das funcionalidades essenciais do React.

Ao desenvolver este projeto, busquei uma abordagem que me permitisse experimentar, testar e compreender o funcionamento interno do React, sem a necessidade de uma preocupação excessiva com aspectos visuais ou documentação detalhada.

Este projeto representa um marco no meu percurso de aprendizado em React, e estou aberto a futuras modificações e expansões à medida que continuo a aprimorar minhas habilidades. Se surgirem dúvidas ou sugestões, ficarei feliz em explorá-las, pois a iteração e o aprendizado contínuo são essenciais para o meu crescimento como desenvolvedor React.
