const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        name:{type:String},
        email:{type:String,unique:true,required:true,lowercase:true},
        phone:{type:String},
        password:{type:String}
    },
    {timestamps:true,versionKey:false}
)
const UserModel=mongoose.model('users',DataSchema)
module.exports=UserModel