import React from 'react';
import userStore from "../store/userStore.js";
import toast from "react-hot-toast";

const LoginForm = () => {
    const{LoginFormData,LoginFormOnChange,loginRequest}=userStore()
    const onSubmit = async ()=>{
        let res = await loginRequest(LoginFormData.email,LoginFormData.password);

        if(res){
            window.location.href='/'
        }

    }

    return (
        <div className="section">
            <div className='container'>
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-5">
                        <div className='card p-5'>
                            <div className='card-body'>
                                <h6>Email</h6>
                                <input value={LoginFormData.email} onChange={(e)=>{LoginFormOnChange("email",e.target.value)}} className="form-control"/>
                                <h6 className='mt-2'>Password</h6>
                                <input value={LoginFormData.password} onChange={(e)=>{LoginFormOnChange("password",e.target.value)}} className="form-control"/>
                                <button onClick={onSubmit} className='btn btn-success mt-2'>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LoginForm;