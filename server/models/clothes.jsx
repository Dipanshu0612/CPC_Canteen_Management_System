const mongoose=require('mongoose')

const ClothesSchema=new mongoose.Schema({
    item_name:String,
    comapany_name:String,
    size:String,
    color:String,
    quantity:Number,
    price:Number,
    product_details:String,
    item_img:String
})

const myDB=mongoose.connection.useDb('items_db')
const ClothesModel=myDB.model("clothes_details",ClothesSchema)
module.exports=ClothesModel;