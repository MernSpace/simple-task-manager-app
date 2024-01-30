import React from 'react';
import userStore from "../store/userStore.js";

const UserProfile = () => {
    const {userFormData,userFormOnChange,profileRequest} = userStore()


    const save=async ()=>{
       let res= await profileRequest(userFormData)
        if(res){
            window.location.href='/'
        }


    }
    return (
        <div className='container mt-5'>
            <div className='card p-5 rounded-3'>
                <div className='row mb-5'>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Name </label>
                        <input value={userFormData.name} onChange={(e)=>{ userFormOnChange('name',e.target.value)}}  type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Email </label>
                        <input value={userFormData.email} onChange={(e)=>{ userFormOnChange('email',e.target.value)}}  type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Phone </label>
                        <input value={userFormData.phone} onChange={(e)=>{ userFormOnChange('phone',e.target.value)}}  type="text" className="form-control "/>
                    </div>
                    <div className="col-md-3 p-2">
                        <label className="form-label">Password </label>
                        <input value={userFormData.password} onChange={(e)=>{ userFormOnChange('password',e.target.value)}}  type="text" className="form-control "/>
                    </div>
                    <button className='btn btn-success w-25 mt-5' onClick={save}>Submit</button>
                </div>
            </div>


        </div>
    );
};

export default UserProfile;