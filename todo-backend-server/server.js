const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('Welcome to the Todo API!')
})

const todoRoutes = require('./src/routes/todo.routes')
app.use('/api/todo', todoRoutes)

app.listen(port, () => {
    console.log(`Todo Backend Server listening to port ${port}`)
})