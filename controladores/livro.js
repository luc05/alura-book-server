const fs = require("fs")
const { getTodosLivros } = require("./services/livros")

function getLivros(req, res) {
    try {
        const dados = getTodosLivros()
        res.send(dados)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}