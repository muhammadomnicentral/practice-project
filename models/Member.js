module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "members",
    {
      id: {
        type: DataTypes.INTEGER(18),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    }
  );
  return Member;
};

// "use strict";
// const { Model } = require("sequelize");
// const db = require("../src/config/database");

// module.exports = (sequelize, DataTypes) => {
//   class Member extends Model {}

//   Member.init(
//     {
//       id: {
//         type: DataTypes.INTEGER(18),
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//       },
//       email: {
//         type: DataTypes.STRING,
//       },
//       status: {
//         type: DataTypes.BOOLEAN,
//       },
//       createdAt: DataTypes.DATE,
//       updatedAt: DataTypes.DATE,
//     },
//     {
//       //tableName: "members",
//       sequelize,
//       modelName: 'Member'
//       // timestamps: false
//     }
//   );
//   return Member;
// };
//const sequelize = new Sequelize();

//module.exports = Member;
// const Sequelize = require('sequelize');
// const db = require('../config/database');

// const Member = db.define('members', {
//     id: {
//         type: Sequelize.INTEGER(18),
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     status: {
//         type: Sequelize.BOOLEAN
//     }
// }, {
//     tableName: 'members',
//     // timestamps: false
// });

// module.exports = Member;
