const { Obras } = require ("../db");

const getObras = async () => {
    try {
        const obras = await Obras.findAll();
        return obras;
    } catch (error) {
        console.log("Error en getObras:", error.message);
    }
};
const getObrasId = async (idObra) => {
    try {
        const obra = await Obras.findByPk(idObra);
        return obra;
    } catch (error) {
        console.log("Error en getObrasId:", error.message);
    }
};
const postObras = async (bodyObra) => {
    try {
        await Obras.findOrCreate({
            where: {nombre: nombreUsuario},
            defaults: {
                year: bodyObra.year,
                name: bodyObra.name,
                image: bodyObra.image,
            },
        }).spread ((obra, creado) => {
            if(creado) {
                return obra;
            } else {
                return;
            }
        });
    } catch (error) {
        console.log("Error en postObras:", error.message);
    }
};

module.exports = {
    getObras, getObrasId, postObras,
};