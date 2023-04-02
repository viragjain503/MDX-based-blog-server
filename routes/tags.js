const express = require('express');
const router = express.Router()
const cors = require('cors')

router.use(cors())

const TagsModel = require("../schemas/tags");

router.get("/",async (req,res)=>{
    var result = await TagsModel.find({}).exec();
    res.send(result);
})

router.get("/:tag",async (req,res)=>{
    var result = await TagsModel.find({ name : req.params.tag}).exec();
    console.log(result);
    res.send(result);
})

// router.get("/latest",async (req,res)=>{
//     var result = await TagsModel.find({}).exec();
//     res.send(result);
// })


router.post("/", async (req,res)=>{
    // const article = await TagsModel.create({
    //     name: "nextjs",
    //     articles: ["how-to-make-a-next-js-blog"]
    // })
    // console.log(article);
    // res.send(article);
})
module.exports = router;
