const { postSuscripciones, getSuscripciones } = require("../controllers/SuscripcionesController");
const { sendEmailSuscripcion } = require("../nodemailer/nodemailerSuscripcion");

const postSuscripcionesHandler = async (req, res) => {
  console.log(req.body);
  const {tipo, date, usuarioId,email,subscripcion,name} = req.body
  try {
    const suscripcion = await postSuscripciones(tipo, date, usuarioId, email, subscripcion, name);
    // const {email} = req.body;
    await sendEmailSuscripcion(email);
    res.status(200).json(suscripcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSuscripcionesHandler = async(req, res) =>{
    try {
        const suscripcion = await getSuscripciones();
        res.status(200).json(suscripcion)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




module.exports = {
    postSuscripcionesHandler,
    getSuscripcionesHandler
}