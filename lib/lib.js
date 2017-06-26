const getJSON = require('simple-get-json')
const searchedTerms = require('../db/connection.js')

module.exports = {

    query: (req,res)=>{
    
    let results = []
    let i = 0;
    let query = req.params.query
    let n = req.params.n
    
    let url = 'https://pixabay.com/api/?key='+process.env.API_KEY+'&q='+ query +'&image_type=photo&page=' + n

    getJSON(url, function(data){
                  
            for (i = 0 ; i < data.hits.length ; i++) {
            
            results.push({
                "Id": data.hits[i].id,
                "Image Url": data.hits[i].webformatURL,
                "Downloads": data.hits[i].downloads,
            })
            }
    
    res.send(results)

    // Save searchedTerms to the database and timestamp it

    let db = new searchedTerms({term: query, when: Date()})
              
                    db.save((err,data)=>{
                        if(err) return console.error(err)
                    })

    })

},

    imageSearch: (req,res)=>{

        searchedTerms.find({}, (err,docs)=>{
          res.json(docs)

        })
    }
}

        
