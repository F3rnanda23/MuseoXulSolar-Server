const server = require('./src/index.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;


server.get("/", (req, res) => {
  const htmlResponse =
    `<html>
      <head>
        <title>Node.js y express</title>
      </head>
      <body>
        <h1>Proyecto levantado</h1>
      </body>
    </html>`
    res.send(htmlResponse);
})
// const { NODE_ENV } = process.env;

// En desarrollo, usa force: true para sincronizar la base de datos
// const forceSync = NODE_ENV === 'development';

conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at 3001`); // eslint-disable-line no-console
  });
});