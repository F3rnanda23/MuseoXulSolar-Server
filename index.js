const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const { NODE_ENV } = process.env;

// En desarrollo, usa force: true para sincronizar la base de datos
const forceSync = NODE_ENV === 'development';
server.get('/', (req, res) => res.send('Hello World!, mundoooo'))

conn.sync({ force: forceSync }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at 3001`); // eslint-disable-line no-console
  });
});