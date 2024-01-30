const {createTask, readTask, updateTask, deleteTask, detailTask, task}= require('../services/taskService')



exports.createTask=async (req, res)=>{
    let result = await createTask(req)
    return res.status(200).json(result)
}

exports.readTask=async (req, res)=>{
    let result = await readTask(req)
    return res.status(200).json(result)
}

exports.updateTask=async (req, res)=>{
    let result = await updateTask(req)
    return res.status(200).json(result)
}

exports.deleteTask=async (req, res)=>{
    let result = await deleteTask(req)
    return res.status(200).json(result)
}

exports.detailTask=async (req, res)=>{
    let result = await detailTask(req)
    return res.status(200).json(result)
}

exports.Task=async (req, res)=>{
    let result = await task(req)
    return res.status(200).json(result)
}