const {Users, Todos } = require("../models");

module.exports ={
    getAllTodo: async (req,res)=>{
        const todoData = await Todos.findAll();
        try {
            res.status(200).json({
                message: "berhasi mendapatkan semua Data todo",
                data: todoData
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error");
        }
    },
    getAllTodoUser: async (req,res)=>{
        const usernameUser = req.payload.username
        const todoData = await Users.findOne({
            include: Todos,
            where: {username:usernameUser}
        })
        try {
            res.status(200).json({
                message:"berhasil mendapatkan data todos dari user",
                data:todoData.Todos
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error");
        }
    },

    getTodoById: async (req,res)=>{
        const{id} = req.params
        const todoById = await Todos.findOne({where:{id:id}});

        try {
            res.status(200).json({
                message:"berhasil mendapatkan todo dari id",
                data : todoById
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    getTodoDetail: async (req,res)=>{
        const{id} = req.params
        const {detail} = await Todos.findOne({where:{id:id}});
        try {
            res.status(200).json({
                message:"berhasil mendapatkan detail todo dari id",
                data_detail : detail 
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    addTodo: async (req,res)=>{
        const dataTodo = req.body
        if(JSON.stringify(dataTodo)==='{}'){
            res.status(400).send("todo kosong")
            return
        }
        const usernameUser = req.payload.username
        const {id} = await Users.findOne({
            attributes: ['id'],
            where: {username:usernameUser}
        })
        try {
            await Todos.create({
                user_id:id,
                todo:dataTodo.todo,
                detail:dataTodo.detail,
                createdAt:new Date()
            })
            res.status(201).json({
                message:"berhasil menambahkan Todo"
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    updateTodo: async (req,res)=>{
        const {id} = req.params
        const {todo} = req.body
        if (!todo) {
            res.status(400).send("todo baru kosong")
            return
        }
        try {
            await Todos.update({
                todo:todo,
                updatedAt:new Date()
            },{
                where:{
                    id:id
                }
            })
            res.status(200).send('todo berhasil diupdate')
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    updateDetail: async (req,res)=>{
        const {id} = req.params
        const {detail} = req.body
        if (!detail) {
            res.status(400).send("detail baru kosong")
            return
        }
        try {
            await Todos.update({
                detail:detail,
                updatedAt:new Date()
            },{
                where:{
                    id:id
                }
            })
            res.status(200).send('todo berhasil diupdate')
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    updateStatus: async (req,res)=>{
        const {id} = req.params
        const {status} = req.body
        if (!status) {
            res.status(400).send("status baru kosong")
            return
        }
        try {
            await Todos.update({
                status:status,
                updatedAt:new Date()
            },{
                where:{
                    id:id
                }
            })
            res.status(200).send('todo berhasil diupdate')
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    deleteTodoById: async (req,res)=>{
        const {id} = req.params
        try {
            await Todos.destroy({
                where:{
                    id:id
                }
            })
            res.status(200).send("success deleted todo id: "+id)
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }

    },
    deleteAllTodoUser: async (req,res)=>{
        const usernameUser = req.payload.username
        const {id} = await Users.findOne({
            where: {username:usernameUser}
        })
        try {
            await Todos.destroy({
                where:{
                    user_id:id
                }
            })
            res.status(200).send("success deleted all todo user")
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }

    }
}