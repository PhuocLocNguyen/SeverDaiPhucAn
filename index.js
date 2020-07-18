const express = require("express");
const { json } = require("body-parser");
const mongoose = require("mongoose");
//const {Word} = require('./word');
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
////------------------Projects------------------------------

const Projects = require("./Models/Project");

app.get("/project/add", (req, res) => {
  var project = new Projects({
    ten_du_an: "Đồng Phú",
    chu_dau_tu: "Công ty Bất Động Sản Thuận Hòa",
    mo_ta:
      "Với quy mô 2,4 ha, số lượng sản phẩm cung ứng 112 lô đất nền có diện tích đa dạng trung bình từ 106 – 180m2, Khu dân cư Thuận Hoà Lucky Home có pháp lý hoàn chỉnh, sổ đỏ riêng từng lô, xây dựng tự do, cơ sở hạ tầng nội khu hoàn thiện. Sở hữu vị trí đắc địa là cửa ngõ giao thương giữa TP Đồng Xoài và TP Hồ Chí Minh, Bình Dương, Đồng Nai…Đất nền Thuận Hoà Lucky Home hứa hẹn sẽ là nơi an cư, cũng như đầu tư cực kì lí tưởng với tiềm năng sinh lời lớn.",
    vi_tri: "Đường DT741, Xã Tiến Hưng, Thành phố Đồng Xoài, Tỉnh Bình Phước",
    hinh_anh: [
      "https://daiphucan.com/wp-content/uploads/2020/02/2a13322d4b6db033e97c.jpg",
      "https://daiphucan.com/wp-content/uploads/2020/02/Thuan-Hoa-Lucky-Home-9.jpg",
      "https://daiphucan.com/wp-content/uploads/2020/02/Thuan-Hoa-Lucky-Home-5.jpg",
    ],
    loai_hinh: "Đất nền",
    don_vi_phan_phoi: "Bất Động Sản Đại Phúc An",
    quy_mo: "2.4 ha",
    so_luong: "112 lô đất nền",
    dien_tich_phan_lo: "106-107-111-120-128-132-140-160-180",
    hinh_thuc_xay_dung: "Xây dựng tự do",
    ngan_hang: "Viettinbank hỗ trợ cho vay từ 50% - 70%",
    phap_ly: "Sổ đỏ riêng từng lô",
  });
  // console.log(project);
  // res.json(project);
  project.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json(project);
    }
  });
});
app.get("/project", (req, res) => {
  Projects.find({})
    .then((projects) => res.send({ success: true, projects }))
    .catch((error) => res.send({ success: false, message: error }));
});
app.get("/project/:_id", (req, res) => {
  const { _id } = req.params;
  Projects.findById({ _id })
    .then((project) => res.send({ success: true, project }))
    .catch((error) => res.send({ success: false, message: error }));
});

////------------------Counselor------------------------------

const Counselor = require("./Models/Counselor");
app.get("/counselor/add", (req, res) => {
  var counselor = new Counselor({
    name: "Lỳ",
    full_name: "Nguyễn Phước Lỳ",
    phone: "0393977152",
    email: "nguyenphuocloc095@gmail.com",
    address: "Bình Thạnh, TPHCM ",
    description: "Với quy mô 2,4 ha, số lượng sản phẩm cung ứng 112 lô đất nền có diện tích đa dạng trung bình từ 106 – 180m2, Khu dân cư Thuận Hoà Lucky Home có pháp lý hoàn chỉnh, sổ đỏ riêng từng lô, xây dựng tự do, cơ sở hạ tầng nội khu hoàn thiện. Sở hữu vị trí đắc địa là cửa ngõ giao thương giữa TP Đồng Xoài và TP Hồ Chí Minh, Bình Dương, Đồng Nai…Đất nền Thuận Hoà Lucky Home hứa hẹn sẽ là nơi an cư, cũng như đầu tư cực kì lí tưởng với tiềm năng sinh lời lớn.",
    image: "https://daiphucan.com/wp-content/uploads/2020/02/Thuan-Hoa-Lucky-Home-9.jpg",
    code_number: "DPA 00001",
  });

  counselor.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json(counselor);
    }
  });
});

app.get("/counselor", (req, res) => {
  Counselor.find({})
    .then((counselors) => res.send({ success: true, counselors }))
    .catch((error) => res.send({ success: false, message: error }));
});

app.get("/counselor/:_id", (req, res) => {
  const { _id } = req.params;
  Counselor.findById({ _id })
    .then((counselor) => res.send({ success: true, counselor }))
    .catch((error) => res.send({ success: false, message: error }));
});
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
