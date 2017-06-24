const express = require('express')
const path = require('path')
const router = express.Router()
const getJSON = require('simple-get-json')

const dotenv = require('dotenv')
dotenv.load()

//ATTRIB STATIC PATH TO PUBLIC FOLDER
router.use('/', express.static(path.join(__dirname,'../public')))

router.get('/s/:query', (req,res)=>{
    query = req.params.query
    url = 'https://pixabay.com/api/?key='+process.env.API_KEY+'&q='+ query +'&image_type=photo'
    console.log(url)
    getJSON(url, function(data){
       res.json(data);
    })  

       
})



module.exports = router

