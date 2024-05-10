const mongoose=require('mongoose')

const ElectronicsSchema=new mongoose.Schema({
    item_name:String,
    comapany_name:String,
    item_type:String,
    item_colour:String,
    quantity:Number,
    price:Number,
    item_img:String,
    description:String
})

const myDB=mongoose.connection.useDb('items_db')
const ElectronicsModel=myDB.model("electronics_details",ElectronicsSchema)
module.exports=ElectronicsModel;