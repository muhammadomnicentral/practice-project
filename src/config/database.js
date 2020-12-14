// // this config is not being used to connect to DB. /models/database.js is being used 
// const Sequelize = require('sequelize');
// const db = new Sequelize('practice project db', 'postgres', '     ', {
//     host: 'localhost',
//     dialect: 'postgres',
//     operatorAliases: false,

//     pool:{
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// });
// db.authenticate()
//   .then(() => console.log("asdDatabase connected..."))
//   .catch((err) => console.log("Error: " + err));

// module.exports = db;