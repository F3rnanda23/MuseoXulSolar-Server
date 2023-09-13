const {Patrocinios} = require('../db')

const postPatrocinios = async({name,image,mail,phone}) =>{
    const found = await Patrocinios.findOne({where:{name}})
    if (found) throw new Error('There is already a sponsorship with that name')

    const newPatrocinio = await Patrocinios.create({name,image,mail,phone})
    return newPatrocinio
}

const getPatrocinios = async() =>{
    const patrociniosss = await Patrocinios.findAll()
    return patrociniosss
}

module.exports = {
    postPatrocinios,
    getPatrocinios
}