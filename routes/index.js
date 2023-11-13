const express = require("express");
const route = express.Router()

const user_Routes =require("./user-route.js")
const todo_Routes =require("./todo-routes.js")

route.get("/", (req,res) =>{
    res.json({
        message:"welcome to Todo List API with express"
    })
})

route.use("/users", user_Routes);
route.use("/todos", todo_Routes);

module.exports =route;