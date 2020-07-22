const express = require("express");
const { json } = require("body-parser");
const mongoose = require("mongoose");
//const {Word} = require('./word');
const {apiProject} = require("./API/apiProject");
const {apiCounselor} = require("./API/apiCounselor");
const {apiNews} = require("./API/apiNews");
const {apiDeposit} = require("./API/apiDeposit");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(json());

app.listen(process.env.PORT || "4000", () => console.log("Server started"));

mongoose.connect(
  "mongodb+srv://reactnative18052020:Xuanthao@a@cluster0.kwuk0.mongodb.net/daiphucan?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Mongo connected sucessfully!");
    } else {
      console.log("Mongo err");
    }
  }
);
// Projects
apiProject(app);
// Counselor
apiCounselor(app);
// News
apiNews(app);
// deposit
apiDeposit(app);

// app.get("/word" , (req , res) => {
//     Word.find({})
//     .then(words => res.send({success : true , words}))
//     .catch(error => res.send({success : false , message : error}))
// })

// //insert
// app.post("/word" , (req , res) => {
//     const {en , vn } = req.body
//     if(en.trim() === '' || vn.trim() === ''){
//         return res.send({success : false , message : "Emty value"})
//     }
//     const newword = new Word({en , vn})
//     newword.save()
//     .then(w => res.send({success : true , word : w}))
//     .catch(error => res.send({success : false , message : error}))
// })
// //update
// app.put("/word/:_id" , (req , res) => {
//     const {_id} = req.params
//     const {isMemorized} = req.body
//     if(_id.trim() === '' || isMemorized === null){
//         return res.send({success : false , message : "Emty value"})
//     }
//     Word.findByIdAndUpdate(_id,{isMemorized},{new : true})
//     .then(w => res.send({success : true , word : w}))
//     .catch(error => res.send({success : false , message : error}))
// })
// //delete
// app.delete("/word/:_id" , (req , res) => {
//     const {_id} = req.params
//     if(_id.trim() === ''){
//         return res.send({success : false , message : "Emty value"})
//     }
//     Word.findByIdAndDelete(_id)
//     .then(w => res.send({success : true , word : w}))
//     .catch(error => res.send({success : false , message : error}))
// })

//app.listen(process.env.PORT || '4000' ,() => console.log("Server started"))
