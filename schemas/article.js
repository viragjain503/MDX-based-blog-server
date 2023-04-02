const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    articleNumber: Number,
    title: String,
    minsRead: Number,
    published: {
        type: Date,
        default: Date.now()
    },
    url: String
})

module.exports = mongoose.model("Article",articleSchema)