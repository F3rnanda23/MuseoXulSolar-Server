const {Actividades} = require("../db")

const postActivity = async({date,name,image,description})=>{
    const createActivity = await Actividades.create({date,name,image,description});
    if(createActivity) throw new Error("ya existe esa actividad");
    return createActivity
}

const allActivity = async()=>{
    const activities = await Actividades.findAll();
    return activities;
}

const editActivity = async ({ id, name, date, image, description }) => {
    try {
      // Buscar la actividad por su ID
      const activity = await Actividades.findByPk(id);
  
      if (!activity) {
        throw new Error("Actividad no encontrada");
      }
  
      // Actualizar las propiedades de la actividad
      activity.name = name;
      activity.date = date;
      activity.image = image;
      activity.description = description;
  
      // Guardar los cambios en la base de datos
      await activity.save();
  
      return activity;
    } catch (error) {
      throw error;
    }
  }

module.exports = {
    postActivity,
    allActivity,
    editActivity
};