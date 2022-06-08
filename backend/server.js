const config = require('./utils/config')
const express = require('express')
const server = express()
const mysql = require('mysql2/promise')

const db = require('./utils/db')
const middleware = require('./utils/middleware')
const notesRouter = require('./controllers/notes')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')

server.use(express.json())
server.use(middleware.requestLogger)

server.use('/api/notes', notesRouter)
server.use('/api/login', loginRouter)
server.use('/api/users', usersRouter)

server.use(middleware.unknownEndpoint)
server.use(middleware.errorHandler)

module.exports = server
