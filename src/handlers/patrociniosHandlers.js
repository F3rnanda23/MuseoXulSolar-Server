const {
  postPatrocinios,
  getPatrocinios,
  putPatrocinios,
  deletePatrocinios,
  restorePatricinios,
  searchByNamePatro
} = require("../controllers/patrociniosControllers.js");

const postPatrociniosHandler = async (req, res) => {
  const { name, image, mail, phone } = req.body;
  try {
    const patrocinios = await postPatrocinios({ name, image, mail, phone });
    res.status(200).json(patrocinios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPatrociniosHandler = async (req, res) => {
  const {name} = req.query;
  try {
    const getPatrocinioss = name?await searchByNamePatro(name):await getPatrocinios();
    res.status(200).json(getPatrocinioss);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const putPatrociniosHandler = async (req, res) => {
  const { id } = req.params;
  const { name, image, mail, phone } = req.body;
  try {
    const cambiarPatrocinios = await putPatrocinios({ name, image, mail, phone, id});
    res.status(200).json(cambiarPatrocinios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePatrociniosHandler = async (req,res) =>{
    const {id} = req.params;
    try {
        const deletePatro = await deletePatrocinios(id)
        res.status(200).json(deletePatro)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const restorePatriciniosHandler = async (req,res) =>{
    const {id} = req.params;
    try {
        const restorePatro = await restorePatricinios(id)
        res.status(200).json(restorePatro)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
  postPatrociniosHandler,
  getPatrociniosHandler,
  putPatrociniosHandler,
  deletePatrociniosHandler,
  restorePatriciniosHandler
};
