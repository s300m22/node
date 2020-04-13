var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world 555')
})

app.get('/home', function (req, res) {
    res.send('home')
  })
app.listen(3000)