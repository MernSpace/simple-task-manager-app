const  mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    userID:{type:mongoose.Schema.Types.ObjectId}
},{timestamps:true,versionKey:false})
const taskModel = mongoose.model('tasks',dataSchema)
module.exports=taskModel;