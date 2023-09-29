// require("dotenv").config();

// const mercadopago = require("mercadopago");

// const { ACCESS_TOKEN } = process.env;

// mercadopago.configure({
//   // sandbox: true, variable para el modo de prueba de mp
//   access_token: `${ACCESS_TOKEN}`,
// });

// const pagar = (req, res) => {
//   const preference = {
//     items: [
//       {
//         title: req.body.description,
//         unit_price: Number(req.body.price),
//         quantity: Number(req.body.quantity),
//         currency_id:'USD'
//       },  
//     ],
//     back_urls: {
//       success: "https://client-xul-solar.vercel.app/",
//       failure: "https://client-xul-solar.vercel.app/",
//     },
//     auto_return: "approved",
//   };
//   mercadopago.preferences
//     .create(preference)
//     .then((response) => {
//       console.log('id', response.body.id);
//       res.json({ init_point: response.body.init_point, id: response.body.id});
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ message: "Error al crear referencia de pago" });
//     });
// };

// module.exports = {
//     pagar
// }

require("dotenv").config();

const mercadopago = require("mercadopago");
const { sendEmailPago } = require("../nodemailer/nodemailerPago");

const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: `${ ACCESS_TOKEN }`,
});

const pagar = async (req, res) => {
  const { userEmail } = req.body;
  const preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        currency_id: 'USD',
      },
    ],
    back_urls: {
      success: "https://client-xul-solar.vercel.app/",
      failure: "https://client-xul-solar.vercel.app/",
      pending: "",
    },
    auto_return: "approved",
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    const init_point = response.body.init_point;
    const id = response.body.id;

    // Envía un correo electrónico cuando el pago es aprobado
    await sendEmailPago(userEmail); // Asegúrate de proporcionar los datos necesarios a esta función si es necesario

    res.status(200).json({ init_point, id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear referencia de pago" });
  }
};

module.exports = {
  pagar,
};