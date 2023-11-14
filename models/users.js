// const todos = require("./todos")

"use strict";
const { Model } = require("sequelize");
// const Todo = require("./todos");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Todos,{
        as:'todos',
        foreignKey:'user_id'
      });
    }
  }
  Users.init(
    {
      nama: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
