const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
 title: String,
 description: String,
 images: [{type: String}],
});

module.exports = mongoose.model("news", newsSchema);
