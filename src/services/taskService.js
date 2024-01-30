const taskModel = require('../models/taskModel')
const mongoose = require('mongoose')
const ObjectID=mongoose.Types.ObjectId

const createTask= async (req)=>{
    try {
        let postBody = req.body;
        let ID = req.headers.user_id;
        postBody.userID=ID;
        let data = await taskModel.create(postBody)
        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}


const readTask= async (req)=>{
    try {
        let projection = {$project: {
            "userID":0,
                "createdAt":0,
                "updatedAt":0
            }}
        let data = await taskModel.aggregate([
            projection
        ])
        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}



const updateTask= async (req)=>{
    try {
        let taskID = req.params.ID;
        let postBody = req.body;
        let match ={_id:taskID}
        let data = await taskModel.updateOne(match,postBody)
        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}
const deleteTask= async (req)=>{
    try {
        let taskID = req.params.ID;
        let match ={_id:taskID}
        let data = await taskModel.deleteOne(match)
        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}


const task = async (req)=>{
    try{
        let taskID = req.params.ID
        let match ={_id:taskID};
        let data = await taskModel.findOne(match)
        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}


const detailTask= async (req)=>{
    try {
        let user_id=new ObjectID(req.headers.user_id);
        let matchStage={$match:{userID:user_id}}

        let JoinStage={$lookup:{from:"users",localField:"userID",foreignField:"_id",as:"user"}}
        let unwindStage={$unwind:"$user"}
        let projectionStage={
            $project:{
                '_id':0,'userID':0,'createdAt':0,'updatedAt':0,'user._id':0,"user.email":0,"user.password":0,"user.phone":0,
                "user.createdAt":0,"user.updatedAt":0

            }
        }

        let data = await taskModel.aggregate([
            matchStage,
            JoinStage,
            unwindStage,
            projectionStage
        ])

        return {status:"success",data:data}
    }
    catch (e){
        return {status:"fail",data:e}.toString()
    }
}


module.exports={
    createTask,
    readTask,
    deleteTask,
    updateTask,
    detailTask,
    task
}