const express = require("express");
const route = express.Router()

const user_Routes =require("./user-route")
const todo_Routes =require("./todo-routes");
const auth_Routes = require("./auth-route");
const verifyToken = require("../middleware/auth")

route.get("/", (req,res) =>{
    res.json({
        message:"welcome to Todo List API with express"
    })
})

route.use("/auth",auth_Routes);
route.use("/users", user_Routes);
route.use("/todos",verifyToken, todo_Routes);

module.exports =route;