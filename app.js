// Express and other Requirements
const express = require('express')
const app = express()
const path = require('path')

// Const and Var Definition
const port = process.env.PORT | 8080;
const route = require('./routes/routes.js')

// .env var definitions
const dotenv = require('dotenv')
dotenv.load()

// Database Requirements
const mongoose = require('mongoose')
var urlToShorten = require('./db/connection.js')

//Database Connection
mongoose.connect('mongodb://' + process.env.DB_USER +':' + process.env.DB_PASS + process.env.DB_HOST)
var db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open', ()=>{
    console.log('\nHey guys! We\'re connected!\n')
})







// app use forwarded to routes.js file
app.use('/', route)


//Server running and listening on const port
app.listen(port,()=>{
    console.log('Server listening on port: ' + port)
})