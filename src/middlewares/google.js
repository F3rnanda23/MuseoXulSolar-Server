const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")
const { Usuario } = require("../db.js");
const { config } = require("dotenv");
config();


passport.use(
  "auth-google",
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google"
  },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        // Utiliza findOne con el where para buscar o crear el usuario.
        const [user] = await Usuario.findOrCreate({
          where: { googleId: profile.id },
          defaults: {
            email: profile.emails[0].value,
            // Otros campos que quieras configurar inicialmente
          }
        });

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  ));


  // Esto es necesario solo si estás utilizando sesiones
passport.serializeUser(function(user, done) {
  done(null, user.id); // Usualmente se serializa el ID del usuario
});

passport.deserializeUser(function(id, done) {
  // Aquí debes buscar el usuario por su ID en la base de datos y pasarlo a done
  Usuario.findById(id, function(err, user) {
    done(err, user);
  });
});