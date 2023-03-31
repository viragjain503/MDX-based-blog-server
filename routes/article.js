const express = require('express');
const router = express.Router()

const apiData = require('../blogs.json');
const Article = require("../schemas/article");

router.get("/",(req,res)=>{
    res.send(apiData);
})

router.post("/", async (req,res)=>{
    const article = await Article.create({
        articleNumber: 1,
        title: "How to code",
        description: "How to know coding",
        minsRead: 4
    })
    console.log(article);
    res.send(article);
})

module.exports = router;
