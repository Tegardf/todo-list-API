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
      this.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'user_id'
      })
    }
  }
  Todos.init(
    {
      user_id: {
        type:DataTypes.INTEGER,
        references:{
          model:'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      todo: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      detail: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Todos",
    }
  );
  return Todos;
};
