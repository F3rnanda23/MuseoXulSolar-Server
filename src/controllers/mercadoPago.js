require("dotenv").config();

const mercadopago = require("mercadopago");

const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  // sandbox: true, variable para el modo de prueba de mp
  access_token: `${ACCESS_TOKEN}`,
});

const pagar = (req, res) => {
  const preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        currency_id:'USD'
      },  
    ],
    back_urls: {
      success: "http://localhost:5173/",
      failure: "http://localhost:5173/",
    },
    auto_return: "approved",
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
};

module.exports = {
    pagar
}