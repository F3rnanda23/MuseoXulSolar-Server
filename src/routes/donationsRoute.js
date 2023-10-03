require("dotenv").config();
const { Router } = require("express");
const mercadopago = require("mercadopago");
const { sendEmailDonations } = require("../nodemailer/nodemailerDonations.js");
const routerMp = Router();
const { ACCESS_TOKEN } = process.env;

routerMp.post("/", async (req, res) => {

    const { userEmail, description , price , quantity} = req.body;
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
        "https://server-xul-solar.vercel.app/donations/webhook",
        metadata: { 
            userEmail,
        },
    };
    mercadopago.preferences
      .create(preference)
      .then((response) => {
        res.json({ init_point: response.body.init_point });
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

module.exports = routerMp;