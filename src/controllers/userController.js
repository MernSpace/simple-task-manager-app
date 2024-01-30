const {registration, userLogin} = require("../services/userService");




exports.registration=async (req, res)=>{
    let result = await registration(req)
    return res.status(200).json(result)
}
exports.userLogin=async (req, res)=>{
    let result = await userLogin(req)

    if(result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else {
        return res.status(200).json(result)
    }
}