const express = require('express')
const path = require('path')

// const indexRouter = require('./routes/index')

const app = express()

// Views Setup
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

// Static Setup
app.use(express.static(path.resolve(__dirname, 'dist')))

// React
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => {
    console.log('server running')
})