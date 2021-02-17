const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    dersId: { type: String, required:true},
    soruText: { type: String, required:true},
    sikA: { type: String, required:false},
    sikB: { type: String, required:false},
    sikC: { type: String, required:false},
    sikD: { type: String, required:false},


})

module.exports = mongoose.model('Question', questionSchema)