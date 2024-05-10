const mongoose=require('mongoose')

const MedicineSchema=new mongoose.Schema({
    medicine_name:String,
    comapany_name:String,
    medicine_type:String,
    dose:String,
    quantity:Number,
    price:Number,
    item_img:String,
    description:String
})

const myDB=mongoose.connection.useDb('items_db')
const MedicineModel=myDB.model("medicine_details",MedicineSchema)
module.exports=MedicineModel;