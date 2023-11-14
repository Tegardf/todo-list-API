const express = require("express");
const {
  getAllTodo,
  getTodoById,
  addTodo,
  getTodoDetail,
  updateTodo,
  deleteTodoById,
  deleteAllTodoUser,
  getAllTodoUser,
  updateDetail,
  updateStatus,
} = require("../controller/todo-controller");
const route = express.Router();

route.get("/", getAllTodoUser);
route.get("/all-user", getAllTodo);
route.get("/:id", getTodoById);
route.get("/detail/:id", getTodoDetail);
route.post("/", addTodo);
route.put("/:id", updateTodo);
route.put("/detail/:id", updateDetail);
route.put("/status/:id", updateStatus);
route.delete("/:id", deleteTodoById);
route.delete("/", deleteAllTodoUser);

module.exports = route;
