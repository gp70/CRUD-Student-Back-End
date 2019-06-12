var express = require('express');
var app = express();


var testAPIRouter = require('./modules/routing');

app.get('/test', function(request, response){
  response.send('ohmygoodness');
});



app.listen(3001, function(){
  console.log("CONNECTED");
})

app.use('/testAPI',testAPIRouter);


//In case page is not found
app.get('/*', function(request, response){
  response.send('PAGE NOT FOUND');
});