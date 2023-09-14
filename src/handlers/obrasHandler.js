const { error } = require("console");
const { getObras, getObrasId, postObras } = require("../controllers/obrasController");

const getObrasHandler = async (req, res) => {
    try {
        const obras = await getObras();
        res.status(200).json(obras);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const getObrasIdHandler = async (req, res) => {
    try {
        let { idObra } = req.params;
        const obra = await getObrasId(idObra);
        res.status(200).json(obra);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const postObrasHandler = async (req, res) => {
    try {
        let { name, year, image, date } = req.body;
        const obraCreada = await postObras({ name, year, image, date });
        res.status(200).json(obraCreada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getObrasHandler, getObrasIdHandler, postObrasHandler,
};