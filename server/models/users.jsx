const mongoose=require('mongoose')

const userCartSchema= new mongoose.Schema({
    name:String,
    cname:String,
    itype:String,
    icolor:String,
    quan:Number,
    price:Number,
    itemimg:String,
    itemdesc:String,
    fulldet:String,
    weight:String
})

const UserSchema=new mongoose.Schema({
    user_id:String,
    first_name:String,
    last_name:String,
    gender:String,
    age:Number,
    mobile_no:String,
    email_id:String,
    position:String,
    address:String,
    userCart:[userCartSchema]
})

const myDB=mongoose.connection.useDb('users_db')
const UserModel=myDB.model("user_details",UserSchema)
module.exports=UserModel;