"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Todos.init(
    {
      user_id: DataTypes.INTEGER,
      todo: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      status: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Todos",
    }
  );
  return Todos;
};
