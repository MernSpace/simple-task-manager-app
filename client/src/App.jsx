import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import LoginPage from "./pages/login-page.jsx";
import CreateTaskPage from "./pages/create-task-page.jsx";
import UserProfilePage from "./pages/user-profile-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/create-task' element={<CreateTaskPage/>}/>
                <Route path='/create-profile' element={<UserProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;