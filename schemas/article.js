const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  minsRead: Number,
  published: {
    type: Date,
    default: Date.now(),
  },
  url: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tags",
    },
  ],
  views: {
    type: Number,
    default: 0, // Set the default value to 0
  },
});

articleSchema.methods.incrementViews = async function () {
    this.views++;
    await this.save();
  };
  
module.exports = mongoose.model("Article", articleSchema);
