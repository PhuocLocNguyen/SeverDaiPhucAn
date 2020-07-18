const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
 name: String,
 full_name: String,
 phone: String,
 email: String,
 address: String,
 description: String,
 image: String,
 code_number: String,
});

module.exports = mongoose.model("counselor", projectSchema);
