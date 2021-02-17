const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema({
    
    dersAdi: { type: String, required:true},
    tarih: { type: Date, required:true},
    tarihL: { type: Date, required:true},
    sure: { type: String, required:true},
    date: {type:Date, default: Date.now}

})

module.exports = mongoose.model('Exam', ExamSchema)