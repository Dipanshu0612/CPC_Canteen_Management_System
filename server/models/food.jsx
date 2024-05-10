const mongoose=require('mongoose')

const FoodSchema=new mongoose.Schema({
    item_name:String,
    comapany_name:String,
    item_weight:String,
    diet_type:String,
    quantity:Number,
    price:Number,
    item_details:String,
    item_img:String
})

const myDB=mongoose.connection.useDb('items_db')
const FoodModel=myDB.model("food_and_groceries_details",FoodSchema)
module.exports=FoodModel;