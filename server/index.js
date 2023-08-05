const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors=require('cors')
const app = express()
const nodemailer = require('nodemailer');
const UserModel=require('./models/users.jsx')
const LoginModel=require('./models/login.jsx')
const VehicleModel=require('./models/vehicles.jsx')
const ClothesModel=require("./models/clothes.jsx")
const ElectronicsModel=require("./models/electronics.jsx")
const HealthModel=require("./models/health.jsx")
const SportsModel=require("./models/sports.jsx")
const MedicineModel=require("./models/medicine.jsx")
const FoodModel=require("./models/food.jsx")
const bycrypt=require('bcrypt')
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())

app.listen(3001, (res) => {
    console.log('Listening on port 3001')
})

const url1="mongodb+srv://Dipanshu06:DakmM0612@cpc-canteen-system.i2ftzi0.mongodb.net/users_db"   
const url2="mongodb+srv://Dipanshu06:DakmM0612@cpc-canteen-system.i2ftzi0.mongodb.net/items_db"   
mongoose.connect(url1).then(console.log("connected"))
const db=mongoose.connection;

app.get('/getUsers',async (req,res)=>{
    const data= await UserModel.find({})
    res.send(data)
})
app.get('/getVehicles',async (req,res)=>{
    const data= await VehicleModel.find({})
    res.send(data)
})
app.get('/getClothes',async (req,res)=>{
    const data= await ClothesModel.find({})
    res.send(data)
})
app.get('/getElectronics',async (req,res)=>{
    const data= await ElectronicsModel.find({})
    res.send(data)
})
app.get('/getHealth',async (req,res)=>{
    const data= await HealthModel.find({})
    res.send(data)
})
app.get('/getMedicine',async (req,res)=>{
    const data= await MedicineModel.find({})
    res.send(data)
})
app.get('/getFood',async (req,res)=>{
    const data= await FoodModel.find({})
    res.send(data)
})
app.get('/getSports',async (req,res)=>{
    const data= await SportsModel.find({})
    res.send(data)
})

app.post('/getUser',async (req,res)=>{
    let uid=req.body.uid
    console.log(uid)
    const data=await UserModel.findOne({user_id:uid})
    res.send(data)
})

app.post('/sendPass',async (req,res)=>{
    let pass=req.body.pass;
    let uid=req.body.uid
    const hashedpass= await bycrypt.hash(pass,10);
    let result=await LoginModel.create({
        user_id:uid,
        password:hashedpass
    });
    if (result){
        console.log("Inserted")
    }
})


app.post('/send_email', async (req, res) => {
    try {
      const { user_id, password } = req.body;
  
      console.log('Received request for userID:', user_id, 'with password:', password);
  

      const user = await LoginModel.findOne({ user_id });
      console.log('User found in database:', user);
      const ValidPass= await bycrypt.compare(password,user.password)
  
  
      if (!user || !ValidPass) {
        console.log('Invalid credentials:', user, password);
        console.log(password,ValidPass)
        // res.send({success:"false"});
      }
  
    
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'vedthakar004@gmail.com', 
          pass: 'scfvqsfoctelokdm', 
        },
      });
  
      const otp = Math.floor(Math.random() * 10000);
  
      const mailOptions = {
        from: 'vedthakar004@gmail.com', 
        to: 'dipanshu.a.mishra06@gmail.com',
        subject: 'Login OTP for CPC Canteen',
        text: `Dear ${user.email_id},\n\nYour OTP for the CPC Canteen Login is:\n\n${otp}\n\nThe OTP is valid only for 5 minutes.\n\nThank You for using CPC Canteen!`,
      };
  
      await transporter.sendMail(mailOptions);
  
      
      let otpreg=await LoginModel.updateOne({ user_id }, { $set: { otp: otp.toString() } });
      console.log(otpreg)
  
      res.json({ success: true, message: 'OTP Sent Successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.send({ success: false, message: 'Failed to Send OTP!!' });
    }
  });


app.post('/verify_otp',async (req,res)=>{
    try {
        const { user_id, otp } = req.body;
    
        const user = await LoginModel.findOne({ user_id });
    
        if (!user || user.otp !== otp) {
        console.log(user, otp, user.otp)
         res.json({ success: false, message: 'Invalid OTP' });
        }
        else{
        res.send({ success: true, message: 'OTP verification successful' });
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        // res.json({ success: false, message: 'Failed to verify OTP' });
      }
})