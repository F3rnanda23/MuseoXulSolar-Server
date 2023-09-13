const {Exposiciones} = require("../db")

const postExpo = async({date,name,description})=>{
    const found = await Exposiciones.findOne({where: {name}})
    if(found){throw new Error("The expo already exist")}
    const createExpo = await Exposiciones.create({date,name,description});
    return createExpo
}

const allExpo = async()=>{
    const exposiciones = await Exposiciones.findAll();
    return exposiciones;
}

const idExpo = async(id)=>{
    const found = await Exposiciones.findOne({where:{id}})
    return found
}

const putExpo = async ({ id, date, name, description}) => {
    const existingExpo = await Exposiciones.findOne({ where: { id } });
  
    if (!existingExpo) {
      throw new Error("Expo not found");
    }
  
    existingExpo.date = date;
    existingExpo.name = name;
    existingExpo.description = description;
  
    await existingExpo.save();
  
    return existingExpo;
}


module.exports = {
    idExpo,
    postExpo,
    allExpo,
    putExpo
};