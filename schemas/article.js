const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    articleNumber: Number,
    title: String,
    description: String,
    minsRead: Number,
    published: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Article",articleSchema)