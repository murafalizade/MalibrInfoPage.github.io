const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.use('/*',(req,res)=>{
    res.send("<h1>404</h1>");
})

app.listen(443,console.log("http://localhost:80"));