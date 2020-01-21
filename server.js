const express = require('express')
const cors = require('cors')
const server = express()

const carsRoutes = require('./router/car-router')

server.use(express.json())
server.use(cors())

server.use('/api/cars', carsRoutes)


module.exports = server;