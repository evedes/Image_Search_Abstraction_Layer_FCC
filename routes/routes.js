const express = require('express')
const path = require('path')
const router = express.Router()
const getJSON = require('simple-get-json')

const dotenv = require('dotenv')
dotenv.load()

//ATTRIB STATIC PATH TO PUBLIC FOLDER
router.use('/', express.static(path.join(__dirname,'../public')))

router.get('/s/:query/offset=:n', (req,res)=>{
    let results = []
    let i = 0;
    query = req.params.query
    n = req.params.n
    
    url = 'https://pixabay.com/api/?key='+process.env.API_KEY+'&q='+ query +'&image_type=photo&page=' + n

    getJSON(url, function(data){
            
            console.log(data.totalHits)
            console.log(data.hits.length)

            for (i = 0 ; i < data.hits.length ; i++) {
            
            results.push({
                "Id": data.hits[i].id,
                "Image Url": data.hits[i].webformatURL,
                "Downloads": data.hits[i].downloads,
            })
            }
    
    


    res.send(results)
        
})




    
  

})


module.exports = router

