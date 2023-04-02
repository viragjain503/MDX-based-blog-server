const express = require('express');
const router = express.Router()
// const slugify = require('slugify')
const cors = require('cors')

router.use(cors())

// const apiData = require('../blogs.json');
const ArticleModel = require("../schemas/article");

router.get("/title/:title",async (req,res)=>{
    var result = await ArticleModel.find({ url: req.params.title }).exec();
    res.send(result);
})

router.get("/latest",async (req,res)=>{
    var result = await ArticleModel.find({}).exec();
    res.send(result);
})

router.post("/", async (req,res)=>{
    // const article = await ArticleModel.create({
    //     articleNumber: 2,
    //     title: "How to make a next js blog",
    //     minsRead: 4,
    //     tags : ["nextjs","nodejs","blog"],
    //     url: "how-to-make-a-next-js-blog",

    // })
    // console.log(article);
    // res.send(article);
})

module.exports = router;
