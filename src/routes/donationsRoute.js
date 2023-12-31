require("dotenv").config();
const { Router } = require("express");
const mercadopago = require("mercadopago");
const { sendEmailDonations } = require("../nodemailer/nodemailerDonations.js");
const { Donacion, } = require("../db");
const routerMp = Router();
const { ACCESS_TOKEN } = process.env;
const {donationGetHandler} = require("../handlers/donationHandler.js")

routerMp.post("/", async (req, res) => {

  const { userEmail, description, price, quantity } = req.body;
  mercadopago.configure({
    access_token: `${ACCESS_TOKEN}`,
  });

  const preference = {
    items: [
      {
        title: description,
        unit_price: Number(price),
        quantity: Number(quantity),
        currency_id: "USD",
      },
    ],
    back_urls: {
      success: "https://client-xul-solar.vercel.app/",
      failure: "https://client-xul-solar.vercel.app/",
    },
    notification_url:
      "https://server-xul-solar-ag97.vercel.app/donations/webhook",
    metadata: {
      userEmail,
    },
  };

  mercadopago.preferences
    .create(preference)
    .then(async (response) => {
      const result = await Donacion.create({ quantity, userEmail , price})
      res.json({ init_point: response.body.init_point, data: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Error al crear referencia de pago" });
    });
}
);



routerMp.post("/webhook", async (req, res) => {
  const payment = req.query;
  if (payment.type === "payment") {
    let resp = await mercadopago.payment.findById(payment["data.id"]);
    if (resp.body.status == "approved") {

      let { user_email } = resp.body.metadata;

      await sendEmailDonations(user_email);
    }

  }
  return res.sendStatus(200)
});

routerMp.get("/get", donationGetHandler)
module.exports = routerMp;