const apiDeposit = (app) => {
  const Deposit = require("../Models/Deposit");
  app.get("/deposit", (req, res) => {
    Deposit.find({})
      .then((deposits) => res.send({ success: true, deposits }))
      .catch((error) => res.send({ success: false, message: error }));
  });

  app.post("/deposit" , (req , res) => {
    const {name , description, images, address, phone, email, price} = req.body
    const deposit = new Deposit({name , description, images, address, phone, email, price})
    deposit.save()
    .then(deposit => res.send({success : true , deposit}))
    .catch(error => res.send({success : false , message : error}))
})
};
module.exports = { apiDeposit };
