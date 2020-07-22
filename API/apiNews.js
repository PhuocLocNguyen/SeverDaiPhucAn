const apiNews = (app) => {
  const News = require("../Models/News");
  app.get("/news/add", (req, res) => {
    var news = new News({
      title: "Công Ty Đại Phúc An hiến máu nhân đạo vì cộng đồng",
      description:
        "Hôm nay, ngày 20, tháng 3 năm 2020, vào lúc 7h giờ sáng các thành viên công ty bất động sản Đại Phúc An đi hiến máu tại Nhà Thiếu nhi Hóc Môn – Địa chỉ: 16 Đỗ Văn Dậy, xã Tân Hiệp, huyện Hóc Môn, Tp.HCM Với phương châm “Cho đi là còn mãi”, những cộng sự và cộng tác viên công ty chúng tôi đã hiến những giọt máu nhân đạo mong những giọt máu này phần nào cứu giúp những bệnh nhân có hoàn cảnh khó khăn.",
      images: [
        "https://daiphucan.com/wp-content/uploads/2020/03/5d7b1aa55996a2c8fb87.jpg",
        "https://daiphucan.com/wp-content/uploads/2020/03/1a172ba36d9096cecf81.jpg",
        "https://daiphucan.com/wp-content/uploads/2020/03/899839057f368468dd27.jpg",
      ],
    });

    news.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json(news);
      }
    });
  });

  app.get("/news", (req, res) => {
    News.find({})
      .then((news) => res.send({ success: true, news }))
      .catch((error) => res.send({ success: false, message: error }));
  });

  app.get("/news/:_id", (req, res) => {
    const { _id } = req.params;
    News.findById({ _id })
      .then((news) => res.send({ success: true, news }))
      .catch((error) => res.send({ success: false, message: error }));
  });
};

module.exports = { apiNews };
