const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000

const articleRoute = require('./routes/article')

//routes
app.use('/article',articleRoute);

app.use(cors());

// for database connection
mongoose.connect("mongodb://127.0.0.1:27017/myblog");

// for database connection error
mongoose.connection.on("error", err => {
  console.log("err", err)
})

// for database connection successfull
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app.get("/",(req,res)=>{
    res.send("Hi iam live");
})

app.listen(port, ()=>{
    console.log(`I am live on PORT: ${port}`)
})

