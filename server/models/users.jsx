const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    user_id:String,
    first_name:String,
    last_name:String,
    gender:String,
    age:Number,
    mobile_no:String,
    email_id:String,
    position:String,
    address:String
})

const myDB=mongoose.connection.useDb('users_db')
const UserModel=myDB.model("user_details",UserSchema)
module.exports=UserModel;