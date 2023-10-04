const {Donacion} = require("../db")


const donationGet = async()=>{
    const result = await Donacion.findAll()
    return result
}



module.exports = {donationGet}