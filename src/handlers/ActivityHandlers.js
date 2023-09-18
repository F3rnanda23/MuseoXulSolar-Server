const { 
    postActivity, 
    allActivity, 
    editActivity, 
    deleteLogic, 
    restoreLogic,
    searchByName,
    idAct
 } = require("../controllers/ActivityController.js");


 const idActHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const getId = await idAct(id);
        res.status(200).json(getId)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}



const createActivityHandler = async (req, res) => {
    const { date, name, image, description } = req.body;
    try {
        const activities = await postActivity({ date, name, image, description });
        res.status(200).json(activities)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const allActivityHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const getActivities = name? await searchByName(name): await allActivity();
        res.status(200).json(getActivities);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const putActivityHandler = async (req, res) => {
    const { id } = req.params;
    const { name, date, image, description } = req.body;
    try {
        const activities = await editActivity({ id, name, date, image, description });
        res.status(200).json(activities)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const deleteActivity = async (req, res) => {
    const { id } = req.params
    try {
        const deleteActivities = await deleteLogic(id);
        res.status(200).json(deleteActivities);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
};

const restoreActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const restauredLogic = await restoreLogic(id);
        res.status(200).json(restauredLogic);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


module.exports = {
    createActivityHandler,
    allActivityHandler,
    putActivityHandler,
    deleteActivity,
    restoreActivity,
    idActHandler
}