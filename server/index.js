const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd1d0cbb3076845a39097a3edca27e7a1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {getReview} = requ

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Listening on port ${port}`)})
