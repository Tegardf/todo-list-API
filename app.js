const express =require("express")
const app = express()

const all_routes = require("./routes")

const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(all_routes)

app.listen(PORT,()=>{
    console.log("Server running at PORT: " +PORT) 
})
