// "use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mem extends Model {
    static associate(models) {}
  }
  Mem.init(
    {
      id: {
        type: DataTypes.INTEGER(18),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Mem",
      tableName: "Mems"
    }
  );
  return Mem;
};
