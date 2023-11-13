const express = require("express");
const { getAllUser, getUserById, addUser, deleteUserById, deleteAllUser } = require("../controller/user-controller");
const route = express.Router()


route.get("/",getAllUser);
route.get("/:id",getUserById);
route.post("/",addUser);
route.delete("/:id",deleteUserById);
route.delete("/",deleteAllUser);

module.exports = route;
