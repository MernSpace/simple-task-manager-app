import React, {useEffect} from 'react';
import taskStore from "../store/taskStore.js";
import TaskTable from "../component/taskTable.jsx";
import Header from "../layout/header.jsx";

const HomePage = () => {
    const {taskListRequest} = taskStore()


    useEffect(() => {
        (async ()=>{
            await taskListRequest();
        })()
    }, []);

    return (
        <div>
            <Header/>
            <TaskTable/>
        </div>
    );
};

export default HomePage;