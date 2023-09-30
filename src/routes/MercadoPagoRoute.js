const { Router } = require("express");
const { pagar } = require("../controllers/mercadoPago");
const mercadopago = require("mercadopago");
const { postSuscripciones } = require("../controllers/SuscripcionesController");
const { postSuscripcionesHandler } = require ("../handlers/SuscripcionesHandler");
const { sendEmailSuscripcion } = require("../nodemailer/nodemailerSuscripcion");
const routerMp = Router();

routerMp.post("/", pagar);
routerMp.post("/webhook", async (req, res) => {
  const payment = req.query;
  if (payment.type === "payment") {
    let resp = await mercadopago.payment.findById(payment["data.id"]);
    if (resp.body.status == "approved") {
    
      let { date, subscripcion, tipo, usuario_id, name, email } =
        resp.body.metadata;
        const usuarioId = usuario_id;
        //tipo, date, usuarioId,email,subscripcion,name
      await postSuscripciones(
        tipo,
        date,
        usuarioId,
        email,
        subscripcion,
        name
      );
      await sendEmailSuscripcion(email);
    }

  } 
  return res.sendStatus(200)
});

module.exports = routerMp;