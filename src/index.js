const express = require('express');
const cookieParser = require('cookie-parser');
const passport = require("passport");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const loginGoogle = require("./routes/googleRoute.js");
require("./middlewares/google.js");


require('./db.js');

const server = express();

server.name = 'API';
<<<<<<< HEAD:src/app.js
server.use(express.json())
=======


server.use(passport.initialize());
>>>>>>> 92b5983b9f3a6fd74bdf7f7e2078de31463d3aff:src/index.js
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


server.use("/auth",passport.authenticate("auth-google",{
  scope:[
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
  session: false,
}),loginGoogle)
server.use('/', routes);


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
