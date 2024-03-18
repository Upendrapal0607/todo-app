const mongoose= require("mongoose");

const todoSchema=mongoose.Schema({
    status:Boolean,
    task:String
},{versionKey:false})
const TodoModel= mongoose.model("myTodos",todoSchema)

module.exports={
    TodoModel
}
