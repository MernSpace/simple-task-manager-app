import React from 'react';
import taskStore from "../store/taskStore.js";
import {Link} from "react-router-dom";

const TaskTable = () => {
    const {taskList} = taskStore()
   if(taskList===null){
       return(
           <h1>Loding....</h1>
       )
   }
   else {
       return (
           <div className="section">
               <div className="container">
                   <div className="row">
                       <h1 className="headline-4 text-center my-2 p-0">Task Manager</h1>
                       <span className="bodySmal mb-5 text-center">MERN Stack application</span>
                       {
                           taskList.map((item,i)=>{
                               return(
                                   <div key={i} className="col-6 col-lg-8r text-center col-md-8r p-2">
                                       <Link to={"/create-task?id="+item['_id']} className="card h-100 rounded-3 bg-white">
                                           <div className="card-body">
                                               <h6 className='text-decoration-none'>{item['title']}</h6>
                                               <p className="bodySmal mt-3">{item['description']}</p>
                                               <button className='btn btn-success'>Detail</button>
                                           </div>
                                       </Link>
                                   </div>
                               )
                           })
                       }
                   </div>
               </div>
           </div>
       );
   }
};

export default TaskTable;