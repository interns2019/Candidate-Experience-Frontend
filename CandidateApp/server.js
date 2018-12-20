var express = require('express')
var app= express()
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

var server =app.listen("4000",function(err){
    if(err){
      throw err
    }
    else{
      console.log('Listening to port 4000')
    }
})
var a = {
    Success: true
}
app.get("/",function(req,res){
    res.writeHead("200",{ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    res.end(JSON.stringify(a))// important stuff
})

app.post('/',function(req,res){
    console.log(req.body.data)
    res.writeHead("200",{ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    res.end(JSON.stringify(a))
})