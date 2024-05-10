const mongoose=require('mongoose')

const SportsSchema=new mongoose.Schema({
    item_name:String,
    comapany_name:String,
    item_type:String,
    item_colour:String,
    quantity:Number,
    price:Number,
    item_img:String,
    item_desc:String,
    full_details:String
})

const myDB=mongoose.connection.useDb('items_db')
const SportsModel=myDB.model("sports_item_details",SportsSchema)
module.exports=SportsModel;