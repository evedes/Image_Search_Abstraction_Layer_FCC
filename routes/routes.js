const express = require('express')
const path = require('path')
var router = express.Router()


//ATTRIB STATIC PATH TO PUBLIC FOLDER
router.use('/', express.static(path.join(__dirname,'../public')))



module.exports = router