const express = require("express")
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favorito")

const app = express()
app.use(express.json())

app.use("/livros", rotaLivro)
app.use("/favoritos", rotaFavorito)

const cors = require("cors")
app.use(cors({origin: "*"}))

const porta = 8000

app.listen(porta, () => {
    console.log(`Escutando na porta ${porta}`)
})