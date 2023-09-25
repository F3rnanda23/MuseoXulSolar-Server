const { postSuscripciones, getSuscripciones } = require("../controllers/SuscripcionesController");

const postSuscripcionesHandler = async (req, res) => {
  const { tipo, date } = req.body;
  try {
    const patrocinios = await postSuscripciones({ tipo, date });
    res.status(200).json(patrocinios);
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