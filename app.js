const express = require('express');
const app = express();
const {db} = require('./database');

app.use('/api', require('./api'));

db.sync()
  .then(() =>{
    app.listen(8080,() => console.log('We working at 8080 boys!'))
  });