const axios = require("axios");
require("dotenv").config();
const { ACCESS_TOKEN } = process.env;


const mercadoStatus = async (req, res) => {
    const { id } = req.params;
    const accessToken = ACCESS_TOKEN; // Reemplaza con tu propio token de acceso de MercadoPago

    try {
        const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
         console.log('====================================');
         console.log(response);
         console.log('====================================');
        const paymentDetails = response.data;
        console.log(paymentDetails);
        res.status(200).json(paymentDetails);
    } catch (error) {
        // console.error(error);
        res.status(500).json({ error: 'Error al obtener detalles del pago' });
    }
};

module.exports = {mercadoStatus};