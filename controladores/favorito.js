const { getTodosFavoritos, deletarFavorito, incluirNovoLivroFavorito } = require("./services/favoritos")

function getFavoritos(req, res) {
    try {
        const dados = getTodosFavoritos()
        res.send(dados)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function insereFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const dados = incluirNovoLivroFavorito(id)
            res.send(dados)
        } else {
            res.status(422)
            res.send("Informe um Id valido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function removeFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const dados = deletarFavorito(id)
            res.send(dados)
        } else {
            res.status(422)
            res.send("Informe um Id valido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    insereFavorito,
    removeFavorito
}