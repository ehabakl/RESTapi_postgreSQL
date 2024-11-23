const express = require("express")
const mainRoutes = require("./src/folder/routes")

const app = express()
const port = 5000

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api", mainRoutes )

app.listen(port , ( )=> console.log(`api is listening on port ${port}`))