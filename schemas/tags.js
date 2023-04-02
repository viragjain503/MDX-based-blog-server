const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: String,
    articles: Array,
})

module.exports = mongoose.model("Tags",tagSchema)