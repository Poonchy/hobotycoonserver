const express = require('express')
const server = express()

const userRouter = require('./users/usersRouter.js')

server.use(express.json());

server.use("/users", userRouter)

module.exports = server