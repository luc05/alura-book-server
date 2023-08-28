const express = require("express")

const app = express()

const porta = 8000

app.get('/', (req, res) => {
    res.send("Olá Mundo!")
})

app.listen(porta, () => {
    console.log(`Escutando na porta ${porta}`)
})