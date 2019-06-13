const express = require('express');
const app = express();
const {db} = require('./database');
const bodyParser = require('body-parser');

//var jsonParser = bodyParser.json();

app.use(bodyParser.json());
app.use('/api', require('./api'));


db.sync()
  .then(() =>{
    app.listen(8080,() => console.log('We working at 8080 boys!'))
  });