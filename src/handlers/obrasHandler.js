const {getObras, getObrasId, postObras } = require ("../controllers/obrasController");

const getObrasHandler = async (req, res) => {
    try {
    const obras = await getObras();
    res.status(200).json ({ data: obras, error: false });
    } catch (error) {
        res.status(400).json ({ error: true, msj: error.message });
    }
};
const getObrasIdHandler = async (req, res) => {
    try {
        let { idObra } = req.params;
        const obra = await getObrasId (idObra);
        res.status(200).json ({ data: obra, error: false});
    } catch (error) {
        res.status(400).json ({ error: true, msj: error.message });
    }
};
const postObrasHandler = async (req, res) => {
    try {
        let {name, year, image } = req.body;
        if(!name || !year || !image) return res.status(400).json ({ msj: "Faltan datos para crear la obra", error: false });
        const obraCreada = await postObras ({ name, year, image });
        if (obraCreada) {
            res.status(200).json ({ data: obraCreada, error: false });
        } else {
            res.status(400).json({ data: [], error: false });
        }
    } catch (error) {
        res.status(400).json ({ error: true, msj: error.message });
    }
};

module.exports = {
    getObrasHandler, getObrasIdHandler, postObrasHandler,
};