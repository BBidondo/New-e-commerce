const dotenv = require("dotenv"); // Importa el paquete dotenv

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const server = require("./src/app");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  // Creamos una variable de entorno llamada PORT (le damos valor 3001 localmente).
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});


