const mongoose=require('mongoose')
const Schema=mongoose.Schema
const TodoSchema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      },
    
    name: {
        type: String,
        required: true,
      },
    });
module.exports=Todo=mongoose.model('todos',TodoSchema)