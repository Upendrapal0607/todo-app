
const mongoose = require("mongoose")
const cors=require("cors")
const express=require("express");
const { connection } = require("./db/db");
const { todoRoute } = require("./Routes/todo.route");

const app= express();
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
res.send("welcome to todo backend backend")
})

app.use("/todo",todoRoute)

app.use((err,req,res,next)=>{
  if(err){
    res.status(404).send({msg:"page not found"})
  }
})
 app.listen(8080,async()=>{
   try {
    await connection
    console.log("server running on port 8080");
    console.log("connected to the database");

   } catch (error) {
    console.log(error)
   }
})