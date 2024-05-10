const mongoose=require('mongoose')
const bycrpt=require('bcrypt')

const LoginSchema=new mongoose.Schema({
    user_id:String,
    password:String,
    email_id:String,
    otp:String
})

const LoginModel=mongoose.model("login_details",LoginSchema)
module.exports=LoginModel;