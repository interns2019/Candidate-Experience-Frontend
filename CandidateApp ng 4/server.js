var express = require('express')
var app= express()

app.use(express.static(__dirname + '/angular'));

var server =app.listen("8000",function(err){
    if(err){
      throw err
    }
    else{
      console.log('Listening to port 8000')
    }
})

app.get("/",function(req,res){
    
})