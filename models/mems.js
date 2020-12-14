"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  }
  mems.init(
    {
      title: DataTypes.STRING,
      iscompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "mems",
    }
  );
  return mems;
};
