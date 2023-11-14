const jwt = require("jsonwebtoken")
require('dotenv').config()

const verifyToken = (req,res, next) => {
    const header = req.headers.authorization
    
    if (!header) {
        res.status(400).send("null header")
        return
    }

    const token = header.split(" ")[1]
    if (!token) {
        res.status(400).send("null token")
        return
    }
    const payload = jwt.verify(token,process.env.JWT_KEY)

    req.payload = payload

    next()
}
module.exports = verifyToken