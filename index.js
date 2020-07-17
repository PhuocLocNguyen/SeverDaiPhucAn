const express = require('express')
const {json} = require('body-parser');
const mongoose = require('mongoose');
//const {Word} = require('./word');
const app = express()

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(json())

app.listen(process.env.PORT || '4000' ,() => console.log("Server started"))

mongoose.connect(
    'mongodb+srv://reactnative18052020:Xuanthao@a@cluster0.kwuk0.mongodb.net/daiphucan?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if(!err){
            console.log("Mongo connected sucessfully!");
        }
        else{
            console.log("Mongo err");
        }
    }
);

const Projects = require('./Models/Project');

app.get('/project',(req, res) => {
    var project = new Projects({
        ten_du_an: 'Thuận Hòa Lucky Home',
        chu_dau_tu: 'Công ty Bất Động Sản Thuận Hòa',
        vi_tri: 'Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước',
        hinh_anh: ['thuanhoa.jpg', 'thuanhoa1.jpg', 'thuanhoa2.jpg'],
        loai_hinh: 'Đất nền',
        don_vi_phan_phoi: 'Bất Động Sản Đại Phúc An',
        quy_mo: '2.4 ha',
        so_luong: '112 lô đất nền',
        dien_tich_phan_lo: '106-107-111-120-128-132-140-160-180',
        hinh_thuc_xay_dung: 'Xây dựng tự do',
        ngan_hang: 'Viettinbank hỗ trợ cho vay từ 50% - 70%',
        phap_ly: 'Sổ đỏ riêng từng lô',
    });
    // console.log(project);
    // res.json(project);
    project.save((err) => {
        if(err){
            res.send('loi');
        }else{
            res.json(project);
        }
    });
})
app.get('/',(req, res) => {
    res.send('okay');
})
 
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