const express = require('express')
const path = require('path')
var pixabay = require('pixabayjs')
var router = express.Router()

//Authenticate the client to make Pixabay Requests
pixabay.authenticate(process.env.API_USER, process.env.API_KEY)
//Set default query parameters to make with every request
pixabay.defaults = {safesearch: true}


const dotenv = require('dotenv')
dotenv.load()

//ATTRIB STATIC PATH TO PUBLIC FOLDER
router.use('/', express.static(path.join(__dirname,'../public')))

router.get('/s/:query', (req,res)=>{
   
       let query = req.params.query
       let search = query
       let options = {editors_choice: true}

       let onSuccess = (response)=>{
           console.log('success')
           return response
       }

       let onFailure = (response)=>{
           console.log('failure')
           return response
       }

       let resultList = pixabay.resultList(search, options, onSuccess, onFailure)
       res.json(resultList)
})

module.exports = router

