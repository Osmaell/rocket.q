// importando o express
const express = require('express')

// importando o controller de question
const questionController = require('./controllers/QuestionController')

// armazenando as funcionalidades de rotas
// do express
const route = express.Router()

// definindo as rotas
route.get('/', (req, res) => {res.render('index')})
route.get('/room', (req, res) => {res.render('room')})
route.get('/create-pass', (req, res) => {res.render('create-pass')})

/*  quando colocamos : da forma abaixo, estamos falando
    para o express que o conteúdo que vai vim é desconhecido
    ou seja, criando uma variável para receber o conteúdo vindo
    nessa url.
*/
route.post('/room/:room/:question/:action', questionController.index)

/* 
    Exportando a constante route para que 
    outros arquivos possam utilizá-lo.
 */
module.exports = route