const express = require("express");
const {
  getAllUser,
  getUserById,
  deleteUserById,
  deleteAllUser,
} = require("../controller/user-controller");
const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.delete("/:id", deleteUserById);
route.delete("/", deleteAllUser);

module.exports = route;
