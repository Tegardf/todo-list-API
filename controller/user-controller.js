const { Users, Todo } = require("../models");

module.exports ={
    getAllUser: async (req,res)=>{
        const userData = await Users.findAll({
            // attributes: ['nama','username']
        });
        
        try {
            // console.log(userData)
            res.status(200).json({
                message: "berhasis mendapatkan data",
                data: userData
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
        
    },
    getUserById: async (req,res)=>{
        const {id} =req.params
        const userById = await Users.findOne({where:{id:id}});

        try {
            res.status(200).json({
                message: "berhasis mendapatkan data user",
                data: userById
            })
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }

    },
    deleteUserById: async (req,res)=>{
        const {id} = req.params
        try {
            await Users.destroy({
                where:{
                    id:id
                }
            })
            res.status(200).send("success deleted user id:" + id)
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    deleteAllUser: async (req,res)=>{
        try {
            await Users.destroy({
                truncate:true
            })
            res.status(200).send("success deleted all user")
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    }
}