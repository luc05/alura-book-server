# Alura-book-server
Este projeto consiste em uma API de cadastro de livros.

# Sobre o projeto 
A Api foi construída usando o Node Express, Express como principal auxiliar para a criação do nosso servidor. Ele é um framework 
que tem a responsabilidade de criar o servidor para você e fornecer as ferramentas necessárias para os diversos casos de uso de uma aplicação backend.

Os dados são persistidos em um arquivo JSON(simulando o banco de dados de uma aplicação), dentro da aplicação. Onde é possível fazer todas as principais ações CRUD, que serão explicitadas mais adiante.

O projeto foi feito de acordo o curso;

- Node.js: continue seu projeto full stack criando uma API com Express
    
 Presente na Alura.

# Rotas disponiveis;

GET - http://localhost:8000/livros

Obtém todos os livros já salvos.

GET - http://localhost:8000/livros/ID

Obtém um livro, de acordo com o ID passado na URL acima.

GET - http://localhost:8000/favoritos

Obtém todos os favoritos já salvos

POST - http://localhost:8000/livros

Adiciona um novo livro, de acordo o que for passado no formato JSON, no body da requisição.

Formato do body a ser passado;

{
    "id": "Número ID",
    "nome": "Nome do livro"
}

POST - http://localhost:8000/favoritos/ID

Adiciona um novo favorito, de acordo o ID do livro passado na URL

PATCH - http://localhost:8000/livros/ID

Atualizar um livro, passando na URL o ID do livro a ser alterado. E o valor do novo nome no body.

Formato do body a ser passado;

{
    "nome": "Novo nome do livro"
}

DELETE - http://localhost:8000/livros/ID

Excluir um livro passando o ID do mesmo na URL.

DELETE -  http://localhost:8000/favoritos/ID

Excluir livro favorito de acordo o ID passado na URL

* Rotas

![rotas](https://github.com/luc05/alura-book-server/assets/27972551/b54d9e00-31fe-4fde-ac29-f3bc82ea24e5)

# Tecnologias utilizadas

## BackEnd
Node/Express

## Consumir a API
Postman

# Como executar o projeto

Após clonar o projeto.
1) npm i - baixa todas dependências necessárias.
2) nodemon app.js - para ligar o servidor
3) Através do postman ou outro serviço semelhante para fazer as requisições na api, de acordo o documentado acima.
