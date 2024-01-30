const userModel =require('../models/userModel')
const {EncodeToken} = require('../helper/tokenHelper')
const registration = async (req)=>{
        try{
            let postBody = req.body;
            let data = await userModel.create(postBody)
            return {status:"success",data:data}
        }
        catch (e) {
            return {status:"fail",data:e}.toString()
        }
}


const userLogin = async (req)=>{
    try{
        let email = req.params.email
        let password = req.params.password;

        let total=await userModel.find({email:email,password:password}).count('total');
       if(total===1){

            // User ID Read
            let user_id=await userModel.find({email:email,password:password}).select('_id');

            // User Token Create
            let token=EncodeToken(email,user_id[0]['_id'].toString())
            return {status:"success", message:"Valid OTP",token:token}

        }
        else{
            return {status:"fail", message:"Invalid OTP"}
        }
    }

    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}



module.exports={
    registration,
    userLogin
}