// importando o express
const express = require('express')

// armazenando as funcionalidades de rotas
// do express
const route = express.Router()

// definindo as rotas
route.get('/', (req, res) => {res.render('index')})
route.get('/room', (req, res) => {res.render('room')})
route.get('/create-pass', (req, res) => {res.render('create-pass')})

// exportando a constante route para que 
// outros arquivos possam utilizá-lo
module.exports = route