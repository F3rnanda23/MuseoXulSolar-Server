const {Exposiciones} = require("../db")

const postExpo = async({date,name,image,description,autor})=>{
    const found = await Exposiciones.findOne({where: {name}})
    if(found){throw new Error("The expo already exist")}
    const createExpo = await Exposiciones.create({date,name,image,description,autor});
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

const putExpo = async ({ id, date, name, image, description, autor }) => {
    const existingExpo = await Exposiciones.findOne({ where: { id } });
  
    if (!existingExpo) {
      throw new Error("Expo not found");
    }
  
    existingExpo.date = date;
    existingExpo.name = name;
    existingExpo.image = image;
    existingExpo.description = description;
    existingExpo.autor = autor;
  
    await existingExpo.save();
  
    return existingExpo;
}


module.exports = {
    idExpo,
    postExpo,
    allExpo,
    putExpo
};