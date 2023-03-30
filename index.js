const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hi iam live");
})

const apiData = require('./blogs.json');
app.get("/blog",(req,res)=>{
    res.send(apiData);
})

app.listen(port, ()=>{
    console.log("I am live")
})