const express = require("express");
const { getAllTodo, getTodoById, addTodo, getTodoDetail, updateTodo, deleteTodoById, deleteAllTodo } = require("../controller/todo-controller");
const route = express.Router()

route.get('/',getAllTodo);
route.get('/:id',getTodoById);
route.get('/:id',getTodoDetail);
route.post('/',addTodo);
route.put('/:id',updateTodo);
route.delete('/:id',deleteTodoById);
route.delete('/',deleteAllTodo);

module.exports = route;