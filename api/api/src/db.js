require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DB_DEPLOY } =
  process.env;

const sequelize = DB_DEPLOY
  ? new Sequelize(DB_DEPLOY, {
      logging: false,
      native: false,
    })
  : new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Coquitos`,
      {
        logging: false,
        native: false,
      }
    );

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, Category, Store, User } =
  sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Product.belongsToMany(Category, { through: "Product_Category" });
Category.belongsToMany(Product, { through: "Product_Category" });

User.hasMany(Store);
Store.belongsTo(User);



Store.belongsToMany(Product, { through: "Store_Product" });
Product.belongsToMany(Store, { through: "Store_Product" });



User.hasMany(Store);
Store.belongsTo(User);



// User.belongsToMany(Product, { through: Favorite, foreignKey: "email" });
// Favorite.belongsTo(Product, { foreignKey: "productId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};