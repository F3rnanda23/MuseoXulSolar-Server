const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadCloud = async (path, name) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY_CLOUD,
      api_secret: process.env.API_SECRET_CLOUD,
    });
    let response = await cloudinary.uploader.upload(
      path,
      { public_id: name },
      function (error, result) {
        if (error) {
          console.log(error);
          throw new Error("Error al cargar la imagen:")}
        return result;
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteFile = (rutaCompleta) => {
  try {
    if (fs.existsSync(rutaCompleta)) {
      fs.unlink(rutaCompleta, (error) => {
        if (error) {
          console.error(`Error al eliminar el archivo: ${error.message}`);
        } else {
          console.log("El archivo ha sido eliminado con éxito.");
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadCloud, deleteFile };