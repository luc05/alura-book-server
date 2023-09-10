const { Router } = require("express")
const { getFavoritos, insereFavorito, removeFavorito } = require("../../controladores/favorito")

const router = Router()

router.get('/', getFavoritos)

router.post('/:id', insereFavorito)

router.delete('/:id', removeFavorito)

module.exports = router