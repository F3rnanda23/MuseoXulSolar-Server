const {donationGet} = require("../controllers/donationController")




const donationGetHandler = async(req, res)=>{
    try {
        const response = await donationGet()
        res.status(200).json(response)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}



module.exports = {
    donationGetHandler
}