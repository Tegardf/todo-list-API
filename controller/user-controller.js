const bscrypt = require('bcrypt')
const { Users, Todo } = require("../models");

module.exports ={
    getAllUser: async (req,res)=>{
        const userData = await Users.findAll({
            attributes: ['nama','username']
        });
        
        try {
            console.log(userData)
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
    addUser: async (req,res)=>{
        let dataUser = req.body

        try {
            const hashPwd = bscrypt.hashSync(dataUser.password, 10)
            dataUser.password = hashPwd
            
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    deleteUserById: async (req,res)=>{

    },
    deleteAllUser: async (req,res)=>{

    }
}