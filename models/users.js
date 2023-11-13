// const todos = require("./todos")

"use strict";
const { Model } = require("sequelize");
const todos = require("./todos");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(todos,{foreignKey:'user_id'});
    }
  }
  Users.init(
    {
      nama: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      passsword: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
