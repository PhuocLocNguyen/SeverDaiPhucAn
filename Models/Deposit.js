const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
 name: String,
 description: String,
 images: [{type: String}],
 address: String,
 phone: String,
 email: String,
 price: String,
});

module.exports = mongoose.model("deposit", depositSchema);
