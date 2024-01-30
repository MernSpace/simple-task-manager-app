import create from "zustand";
import axios from "axios";
import Cookies from "js-cookie";


const userStore=create((set)=>({
    LoginFormData:{email:"",password:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },
    loginRequest:async (email,password)=>{
       let res = await axios.post(`/api/v1/login/${email}/${password}`)
        if(res){
            window.location.href = "/";
        }
    },

    isLogin:()=>{
        return !!Cookies.get('token');
    },
    userFormData:{email:"",password:"",phone:"",name:""},
    userFormOnChange:(name,value)=>{
        set((state)=>({
            userFormData:{
                ...state.userFormData,
                [name]:value
            }
        }))
    },
    profileRequest:async (email,password)=>{
        let res = await axios.post(`/api/v1/login/${email}/${password}`)
        if(res){
            window.location.href = "/";
        }
    },


}))
export  default  userStore
