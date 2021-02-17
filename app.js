const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars')
const port = 3000
const hostname = '127.0.0.1'
const moMent = require('moment')
const CONNECTION_URL = "mongodb+srv://alisaribas:cpro123@cpro.0cuh4.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.use(express.static('public'))

const hbs = exphbs.create({     // tarih dönüşümleri için handlebars helper tanımlaması
  helpers: {
    generateDate : (date,format) => {
      return moMent(date).format(format)  // moment paketi kullanıldı
    }
  }
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



const main = require('./routes/main')


app.use('/',main)


app.listen(port, hostname , () => {
    console.log(`server running http://${hostname}:${port}/`);
})

