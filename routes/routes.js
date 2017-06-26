// Requirements
const express = require('express')
const path = require('path')
const router = express.Router() // Express Router for routing
const getJSON = require('simple-get-json') // getJSON NPM Package

// Require lib.js
const lib = require('../lib/lib.js') 

//Load .env file from folder root
const dotenv = require('dotenv')
dotenv.load()


//Define static path for index.html
router.use('/', express.static(path.join(__dirname,'../public')))


// Routes definition
router.route('/s/:query/offset=:n').get(lib.query)
router.route('/imagesearch/').get(lib.imageSearch)

//Module exports of the express.Router()
module.exports = router

