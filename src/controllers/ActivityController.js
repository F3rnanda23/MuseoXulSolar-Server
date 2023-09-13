const {Actividades} = require("../db")

const postActivity = async({date,name,image,description})=>{
    const createActivity = await Actividades.create({date,name,image,description});
    return createActivity
}

const allActivity = async()=>{
    const activities = await Actividades.findAll();
    return activities;
}




module.exports = {
    postActivity,
    allActivity
};