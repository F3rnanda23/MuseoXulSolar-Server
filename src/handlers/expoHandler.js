const {postExpo, allExpo, idExpo, putExpo, deleteLogic, restoreLogic} = require("../controllers/exposicionesController.js");



const createExpoHandler = async(req,res)=>{
    const {date,name,description} = req.body;
    try {
        const exposiciones = await postExpo({date,name,description});
        res.status(200).json(exposiciones)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const allExpoHandler = async(req,res)=>{
    try {
        const getExpo = await allExpo();
        res.status(200).json(getExpo);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

const idExpoHandler = async(req, res)=>{
    const {id} = req.params;
    try {
        const getId = await idExpo(id);
        res.status(200).json(getId)
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}


const updateExpoHandler = async (req, res) => {
    const { id } = req.params;
    const { date, name, description} = req.body;
  
    try {
      const exposicionActualizada = await putExpo({
        id,
        date,
        name,
        description,
      });
  
      res.status(200).json(exposicionActualizada);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
}

const deleteExpo = async (req, res) => {
    const { id } = req.params
    try {
        const deletedExpo = await deleteLogic(id);
        res.status(200).json(deletedExpo);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

const restoreExpo = async (req, res) => {
    const { id } = req.params;
    try {
        const restauredLogic = await restoreLogic(id);
        res.status(200).json(restauredLogic);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


module.exports = {
    createExpoHandler, allExpoHandler, idExpoHandler, updateExpoHandler, deleteExpo, restoreExpo
}