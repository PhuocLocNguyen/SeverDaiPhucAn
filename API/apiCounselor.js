const apiCounselor = (app) => {
  const Counselor = require("../Models/Counselor");
  app.get("/counselor/add", (req, res) => {
    var counselor = new Counselor({
      name: "Lỳ",
      full_name: "Nguyễn Phước Lỳ",
      phone: "0393977152",
      email: "nguyenphuocloc095@gmail.com",
      address: "Bình Thạnh, TPHCM ",
      description:
        "Với quy mô 2,4 ha, số lượng sản phẩm cung ứng 112 lô đất nền có diện tích đa dạng trung bình từ 106 – 180m2, Khu dân cư Thuận Hoà Lucky Home có pháp lý hoàn chỉnh, sổ đỏ riêng từng lô, xây dựng tự do, cơ sở hạ tầng nội khu hoàn thiện. Sở hữu vị trí đắc địa là cửa ngõ giao thương giữa TP Đồng Xoài và TP Hồ Chí Minh, Bình Dương, Đồng Nai…Đất nền Thuận Hoà Lucky Home hứa hẹn sẽ là nơi an cư, cũng như đầu tư cực kì lí tưởng với tiềm năng sinh lời lớn.",
      image:
        "https://daiphucan.com/wp-content/uploads/2020/02/Thuan-Hoa-Lucky-Home-9.jpg",
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
};

module.exports = { apiCounselor };
