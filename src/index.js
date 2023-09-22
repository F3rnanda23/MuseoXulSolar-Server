const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const multer = require("multer");
const path = require("path");

require('./db.js');

const server = express();

server.name = 'API';



server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors());
server.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin, same-origin-allow-popups');
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(session({
  secret: 'xul-xolar', // Cambia esto a una cadena segura
  resave: false,
  saveUninitialized: true,
}));

const storage = multer.diskStorage({
  destination: function (req, file , cb) {
    cb(null, path.join(__dirname, "./public/uploads"));
  },
  filename: function (req, file, cb){
    cb(null, file.originalname);
  },
});
server.use(
  multer({
    storage,
    limits: {fileSize: 1000000},
    fileFilter: (req, file, cb)=> {
      const filetypes = /jpeg|png|jpg|pdf/;
      if(1) {
        return cb(null, true);
      }
      cb(
        { message: "Error: Archivo con extencion invalida", statusCode: 400},
        false
      );
    },
  }).array("images", 10)
);


server.use('/', routes);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
