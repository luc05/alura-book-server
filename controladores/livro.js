const fs = require("fs")
const { getTodosLivros, getLivroPorId, adicionarLivro, atualizarLivro } = require("./services/livros")

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

function postLivro(req, res){
    try{
        const novoLivro = req.body
        adicionarLivro(novoLivro)
        res.status(201)
        res.send("Livro adicionado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try{
        const id = req.params.id
        const modificacoes = req.body
        atualizarLivro(id, modificacoes)
        res.status(201)
        res.send("Livro atualizado com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro
}