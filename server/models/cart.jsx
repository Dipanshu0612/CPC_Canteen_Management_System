const mongoose=require('mongoose')

const CartSchema=new mongoose.Schema({
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

const myDB=mongoose.connection.useDb('users_db')
const CartModel=myDB.model("user_cart",CartSchema)
module.exports=CartModel;