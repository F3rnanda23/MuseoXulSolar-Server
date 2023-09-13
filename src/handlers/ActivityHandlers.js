const {postActivity, allActivity,editActivity} = require("../controllers/ActivityController");



const createActivityHandler = async(req,res)=>{
    const {date,name,image,description} = req.body;
    try {
        const activities = await postActivity({date,name,image,description});
        res.status(200).json(activities)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const allActivityHandler = async(req,res)=>{
    try {
        const getActivities = await allActivity();
        res.status(200).json(getActivities);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

const putActivityHandler = async(req,res)=>{
    const {id} = req.params;
    const{name, date, image, description}= req.body;
    try {
        const activities = await editActivity({id,name, date, image, description});
        res.status(200).json(activities)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    createActivityHandler,
    allActivityHandler,
    putActivityHandler
}