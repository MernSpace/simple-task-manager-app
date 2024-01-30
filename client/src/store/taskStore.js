import create from "zustand";
import axios from "axios";

const taskStore=create((set)=>({
    taskList: null,

    taskListRequest:async ()=>{
        let res= await axios.get("/api/v1/read-task");
        if(res.data['status']==="success"){
            set({taskList:res.data['data']})
        }
    },


    taskFormData:{title:"",description:""},
    taskFormOnChange:(name,value)=>{
        set((state)=>({
            taskFormData:{
                ...state.taskFormData,
                [name]:value
            }
        }))
    },

    createTaskRequest:async (postBody)=>{
        let res= await axios.post("/api/v1/create-task",postBody);
        if(res.data['status']==="success"){
            window.location.href = "/";
        }
    },
    TaskRequest:async (ID)=>{
        let res= await axios.get(`/api/v1/task-detail/${ID}`);
        set({taskFormData:res.data['data']})
    },

    UpdateTaskRequest:async (ID,postBody)=>{
     let res = await axios.post(`/api/v1/update-task/${ID}`,postBody)

    }


}))
export  default  taskStore