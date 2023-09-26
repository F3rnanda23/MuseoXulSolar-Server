const { postSuscripciones, getSuscripciones } = require("../controllers/SuscripcionesController");

const postSuscripcionesHandler = async (req, res) => {

  try {
    const suscripcion = await postSuscripciones(req.body);
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