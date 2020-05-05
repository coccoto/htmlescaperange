const express = require('express')
const path = require('path')

// const indexRouter = require('./routes/index')

const app = express()

// views setup
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'pug')

// static setup
app.use(express.static(path.resolve(__dirname, 'dist')))

// React
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(3000, () => {
    console.log('server running')
})