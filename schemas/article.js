const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    minsRead: Number,
    published: {
        type: Date,
        default: Date.now()
    },
    url: String,
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tags'
      }]
})

module.exports = mongoose.model("Article",articleSchema)