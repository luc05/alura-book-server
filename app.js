const express = require("express")
const rotaLivro = require("./rotas/livro")

const app = express()

app.use("/livros", rotaLivro)

const porta = 8000

app.listen(porta, () => {
    console.log(`Escutando na porta ${porta}`)
})