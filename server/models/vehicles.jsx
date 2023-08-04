const mongoose=require('mongoose')

const VehicleSchema=new mongoose.Schema({
    vehicle_name:String,
    comapany_name:String,
    vehicle_type:String,
    vehicle_colour:String,
    quantity:Number,
    price:Number,
    vehicle_img:String,
    vehicle_desc:String,
    full_details:String
})

const myDB=mongoose.connection.useDb('items_db')
const VehicleModel=myDB.model("vehicles_details",VehicleSchema)
module.exports=VehicleModel;