const mongoose = require('mongoose')

// Schema Definitions
var urlSchema = mongoose.Schema({
    term: String, 
    when: String
})

//Define model
var searchedTerms = mongoose.model('searchedTerms', urlSchema, 'searchedTerms')

module.exports = searchedTerms

