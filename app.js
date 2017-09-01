var express = require('express')
var app = express()
//var model = require('./server/models/index')

var bodyParser = require('body-parser')
var route = require('./server/routes/route');

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use('/',route)

module.exports = app
