import React, {useEffect, useState} from 'react';
import taskStore from "../store/taskStore.js";
import userStore from "../store/userStore.js";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const TaskForm = () => {
    const{taskFormData,taskFormOnChange,createTaskRequest,UpdateTaskRequest,TaskRequest} =taskStore()
    const {isLogin} = userStore()
    const  [UpdateID,SetUpdateID]=useState(null);
    let navigate=useNavigate();



    useEffect(() => {
        (async ()=>{
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            SetUpdateID(id)
            if(id!==null){
                await TaskRequest(id)
            }
        })()
    }, []);


    const Save = async () => {
        if(taskFormData.title.length===0){
            toast.error("Title Required !")
        }
        else if(taskFormData.description.length===0){
            toast.error("Description Required !")
        }
        else{
            if(UpdateID===null){
                let res=await createTaskRequest(taskFormData);
                if(res){
                    toast.success("Create Request Completed");
                    navigate("/");
                }
                else{
                    toast.error("Create Request Fail");
                }
            }
            else{
                let res=await UpdateTaskRequest(UpdateID,taskFormData);
                if(res){
                    toast.success("Update Request Completed");

                }
                else{
                    toast.success("Update Request success");
                    navigate("/");
                }
            }


        }

    }
    return (
        <div className='container mt-5'>
            <div className='card p-5 rounded-3'>
                <div className='row mb-5'>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Title </label>
                        <input value={taskFormData.title} onChange={(e)=>{ taskFormOnChange('title',e.target.value)}}  type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Description </label>
                        <input value={taskFormData.description} onChange={(e)=>{ taskFormOnChange('description',e.target.value)}}  type="text" className="form-control "/>
                    </div>
                </div>
                <button onClick={Save} className='btn btn-success w-25'>Submit</button>
            </div>
            <Toaster position='bottom-center' />
        </div>
    );
};

export default TaskForm;