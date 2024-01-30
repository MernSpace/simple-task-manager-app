import React, {useEffect} from 'react';
import TaskForm from "../component/taskForm.jsx";
import Header from "../layout/header.jsx";


const CreateTaskPage = () => {

    return (
        <div>
            <Header/>
            <TaskForm/>
        </div>
    );
};

export default CreateTaskPage;