// importando o módulo express
const express = require('express')

// importando o arquivo route
const route = require('./route')

// importando o módulo path
const path = require('path')

// criando um server e 
// executando o express e guardando no server
const server = express()

// informando para o express (que é o server),
// que a view engine vai ser ejs
server.set('view engine', 'ejs')

/*  Informando para o express onde está a pasta view

    path pega o caminho da pasta onde está o projeto.
    join é juntar
    __dirname pega onde está o arquivo corrente

*/
server.set('views', path.join(__dirname, 'views'))

/*  Configurando o middleware
    capturando o conteúdo vindo do formulário,
    decodificando o conteúdo e passando para o
    controller.
*/
server.use(express.urlencoded({extended: true}))

// informando para o express utilizar o 
// arquivo route
server.use(route)

// informando para o express utilizar 
// a pasta public
server.use(express.static("public"))

// definindo porta de escuta para o servidor
// express e executando uma arrow function 
// quando os clientes acessarem a porta
server.listen(3000, () => {
    console.log('RODANDO')
})