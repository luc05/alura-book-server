const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter( filtro => filtro.id === id)[0]
    return livroFiltrado
}

function adicionarLivro(novoLivro){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [ ... livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

module.exports = {
    getTodosLivros,
    getLivroPorId, 
    adicionarLivro
}