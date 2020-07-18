const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  ten_du_an: String,
  vi_tri: String,
  mo_ta: String,
  hinh_anh: [{type: String}],
  chu_dau_tu: String,
  don_vi_phan_phoi: String,
  loai_hinh: String,
  quy_mo: String,
  so_luong: String,
  dien_tich_phan_lo: String,
  hinh_thuc_xay_dung: String,
  ngan_hang: String,
  phap_ly: String,
});

module.exports = mongoose.model("projects", projectSchema);
