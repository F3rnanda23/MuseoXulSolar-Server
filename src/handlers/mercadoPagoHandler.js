const axios = require("axios");
require("dotenv").config();
const { ACCESS_TOKEN } = process.env;


const mercadopagoHandler = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
  
    try {
      const paymentStatusResponse = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
        }
      });
      console.log('paymentStatusResponse',paymentStatusResponse);
      const paymentStatus = paymentStatusResponse.data.status;
      console.log(paymentStatus);
      res.json({ status: paymentStatus });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al verificar el estado del pago' });
    }
  };

module.exports = {
    mercadopagoHandler
}