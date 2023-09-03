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

function atualizarLivro(id, modificacoes){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoModificado = {...livrosAtuais[indiceModificado], ...modificacoes}
    livrosAtuais[indiceModificado] = conteudoModificado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function removerLivro(id){
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livrosPermanecentes = livrosAtuais.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosPermanecentes))

}

module.exports = {
    getTodosLivros,
    getLivroPorId, 
    adicionarLivro,
    atualizarLivro,
    removerLivro
}