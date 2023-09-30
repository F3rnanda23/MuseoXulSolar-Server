require("dotenv").config();

const mercadopago = require("mercadopago");
const { idUser } = require("./UsuarioController");

const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  // sandbox: true, variable para el modo de prueba de mp
  access_token: `${ACCESS_TOKEN}`,
});

const pagar = async (req, res) => {

  const { tipo, date, usuarioId, subscripcion, email, name ,description , price , quantity} = req.body;
  let user = await idUser(usuarioId)
  if(!user)
  return res.status(404).send("no existe usuario")
  if(user && user.Suscripciones.length>0){
    return res.status(400).send("usuario ya tiene suscripcion")
  }
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
      "https://a4bd-201-213-140-135.ngrok.io/pagar/webhook",
      metadata: {
        tipo,
        date,
        usuarioId,
        subscripcion,
        email,
        name,
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
};

module.exports = {
  pagar,
};