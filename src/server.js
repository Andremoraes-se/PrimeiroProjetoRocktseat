// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()
server 
    //utilizar body do req
    .use(express.urlencoded({extended: true}))
    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar templetes engine 
    .set('views', path.join(__dirname, "views"))
    .set('view engine','hbs')

    // Criando todas as Rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Para ligar o servidor: node src/server.js
server.listen(5500)