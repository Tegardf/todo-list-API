const { Users, Todo } = require("../models");

module.exports ={
    getAllTodo: async (req,res)=>{
        // const todoData = await Todo.findAll({})
        console.log(req.payload)

        try {
            res.status(200).json({
                message: "berhasi mendapatkan Data todo",
                data: 'todoData'
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error");
        }
        res.status(200).send('aman')
    },

    getTodoById: async (req,res)=>{

    },
    getTodoDetail: async (req,res)=>{

    },
    addTodo: async (req,res)=>{

    },
    updateTodo: async (req,res)=>{

    },
    deleteTodoById: async (req,res)=>{

    },
    deleteAllTodo: async (req,res)=>{

    }
}