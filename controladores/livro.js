const fs = require("fs")
const { getTodosLivros, getLivroPorId } = require("./services/livros")

function getLivros(req, res) {
    try {
        const dados = getTodosLivros()
        res.send(dados)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res){
    try{
        const id = req.params.id
        const dado = getLivroPorId(id)
        res.send(dado)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro
}