const bscrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Users, Todo } = require("../models");

module.exports = {
    registerUser: async (req,res)=>{
        let dataUser = req.body

        const usernameV = await Users.findOne({where: {username:dataUser.username}})
        if (usernameV) {
            res.status(409).send("data username sudah ada");
            return
        }

        try {
            const hashPwd = bscrypt.hashSync(dataUser.password, 10)
            await Users.create({
                nama: dataUser.nama,
                username: dataUser.username,
                email: dataUser.email,
                password: hashPwd,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            res.status(201).send("berhasil register")
        } catch (error) {
            console.log(error)
            res.status(500).send("internal server error")
        }
    },
    loginUser: async (req,res)=>{
        let data = req.body
        const user = await Users.findOne({ 
            attributes:['password','username'],
            where: {email:data.email}
        })
        console.log(user.dataValues);
        if (user === null) {
            res.status(402).send("belum regis")
            return
        }
        if (bscrypt,bscrypt.compareSync(data.password, user.dataValues.password)) {
            const token = jwt.sign({username: user.username}, process.env.JWT_KEY)
            res.status(200).json({
                message: "berhasil login",
                token: token
            })
            return
        }
        res.status(401).send("incorect password")
    }
};