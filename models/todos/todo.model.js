import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  content:{
    type:String,
    require:true,
  },
  complete:{
    type:Boolean,
    default:false,
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodos:[
    {
      type:mongoose.Schema.Type.ObjectId,
      ref:"SubTodo"
    },
  ], // Array of Sub-Todos
},
{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)