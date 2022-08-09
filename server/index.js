const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const {SERVER_PORT} = process.env


const app = express()
app.use(express.json())
app.use(cors())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd1d0cbb3076845a39097a3edca27e7a1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')


const {seed, getRandom, createReview, getReview, deleteReview} = require('./controller.js')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post('/seed', seed)
app.get("/donut/random", getRandom)
app.get('/review', getReview)
app.post('/review', createReview)
app.delete('/review/:id', deleteReview)

app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.PORT || 4005

app.listen(SERVER_PORT, () => {console.log(`Listening on port 4005`)})
