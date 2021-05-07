const express = require('express')
const path = require('path')
// configurar dotenv
require('dotenv').config()
// importar a base de dados
require('./config/database')

// importar rotas
const checklistRoute = require('./src/routes/checklist')
const rootRoute = require('./src/routes/index')

const PORT = process.env.PORT || 3000

const server = express()
server.use(express.json())

// definir arquivos estáticos na página
server.use(express.static(path.join(__dirname, 'public')))

// definir o directorio de views e a view engine
server.set('views', path.join(__dirname, 'src/views'))
server.set('view engine', 'ejs')

// habilitar rotas
server.use('/checklists', checklistRoute)
server.use('/', rootRoute)

server.listen(PORT, () => {
    console.info(`Server is running 🚀 on port: ${PORT}`)
})