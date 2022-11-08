require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const colors = require('colors')

const mainRouter = require('./routes/routes')
const notFoundHandlerMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

colors.enable = true
const port = process.env.PORT || 3000

// ? Middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', mainRouter)

app.use(notFoundHandlerMiddleware)
app.use(errorHandlerMiddleware)

// ! App

const start = () => {
  try {
    app.listen(port, console.log(`Listening on: http://localhost:${port}/`.brightCyan.bold))
  } catch (error) {
    console.log(error)
  }
}

start()
