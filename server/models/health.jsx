const mongoose=require('mongoose')

const HealthSchema=new mongoose.Schema({
    item_name:String,
    comapany_name:String,
    item_type:String,
    quantity:Number,
    price:Number,
    item_img:String,
    item_desc:String,
})

const myDB=mongoose.connection.useDb('items_db')
const HealthModel=myDB.model("health_details",HealthSchema)
module.exports=HealthModel;