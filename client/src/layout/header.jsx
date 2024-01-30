import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import userStore from "../store/userStore.js";

const Header = () => {
    const navigate = useNavigate();
    const {isLogin} = userStore()

    const handleHomeClick = () => {
        navigate('/login');
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='nav-link'>Home</Link>
                        <Link to="/create-task" className='nav-link'>Create Task</Link>
                    </Nav>
                </Navbar.Collapse>
                {
                    isLogin()?(
                        <Button onClick={handleHomeClick}>LogOut</Button>
                        ):(
                            <div>
                                <Button onClick={handleHomeClick}>Login</Button>
                                <Link to='/create-profile' className='btn btn-success mx-2'>Register</Link>
                            </div>

                        )
                }
            </Container>
        </Navbar>
    );
};

export default Header;