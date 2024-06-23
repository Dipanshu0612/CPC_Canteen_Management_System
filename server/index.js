const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const nodemailer = require("nodemailer");
const UserModel = require("./models/users.jsx");
const LoginModel = require("./models/login.jsx");
const VehicleModel = require("./models/vehicles.jsx");
const ClothesModel = require("./models/clothes.jsx");
const ElectronicsModel = require("./models/electronics.jsx");
const HealthModel = require("./models/health.jsx");
const SportsModel = require("./models/sports.jsx");
const MedicineModel = require("./models/medicine.jsx");
const FoodModel = require("./models/food.jsx");
const bycrypt = require("bcrypt");
const Razorpay = require("razorpay");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(3001, (res) => {
  console.log("Listening on port 3001");
});

const url1 = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGO_PASS}@cpc-canteen-system.i2ftzi0.mongodb.net/users_db`;
const url2 = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGO_PASS}@cpc-canteen-system.i2ftzi0.mongodb.net/items_db`;
mongoose.connect(url1).then(console.log("Connected with DB!"));
const db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/getUsers", async (req, res) => {
  const data = await UserModel.find({});
  res.send(data);
});
app.get("/getVehicles", async (req, res) => {
  const data = await VehicleModel.find({});
  res.send(data);
});
app.get("/getClothes", async (req, res) => {
  const data = await ClothesModel.find({});
  res.send(data);
});
app.get("/getElectronics", async (req, res) => {
  const data = await ElectronicsModel.find({});
  res.send(data);
});
app.get("/getHealth", async (req, res) => {
  const data = await HealthModel.find({});
  res.send(data);
});
app.get("/getMedicine", async (req, res) => {
  const data = await MedicineModel.find({});
  res.send(data);
});
app.get("/getFood", async (req, res) => {
  const data = await FoodModel.find({});
  res.send(data);
});
app.get("/getSports", async (req, res) => {
  const data = await SportsModel.find({});
  res.send(data);
});

app.post("/getUser", async (req, res) => {
  let uid = req.body.uid;
  console.log(uid);
  const data = await UserModel.findOne({ user_id: uid });
  res.send(data);
});

app.post("/sendPass", async (req, res) => {
  let pass = req.body.pass;
  let uid = req.body.uid;
  const hashedpass = await bycrypt.hash(pass, 10);
  let result = await LoginModel.create({
    user_id: uid,
    password: hashedpass,
  });
  if (result) {
    console.log("Inserted");
  }
});

app.post("/send_email", async (req, res) => {
  try {
    const { user_id, password } = req.body;
    const user = await LoginModel.findOne({ user_id });
    const ValidPass = await bycrypt.compare(password, user.password);

    if (!user || !ValidPass) {
      res.json({success:"false"});
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "dipanshu.a.mishra06@gmail.com",
        pass: "xybatwjbiiossxlv",
      },
    });

    const otp = Math.floor(Math.random() * 10000);

    const mailOptions = {
      from: "dipanshu.a.mishra06@gmail.com",
      to: "dipanshu.a.mishra06@gmail.com",
      subject: "Login OTP for CPC Canteen",
      text: `Dear ${user.email_id},\n\nYour OTP for the CPC Canteen Login is:\n\n${otp}\n\nThe OTP is valid only for 5 minutes.\n\nThank You for using CPC Canteen!`,
    };

    await transporter.sendMail(mailOptions);

    let otpreg = await LoginModel.updateOne(
      { user_id },
      { $set: { otp: otp.toString() } }
    );
    console.log(otpreg);

    res.json({ success: true, message: "OTP Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.send({ success: false, message: "Failed to Send OTP!!" });
  }
});

app.post("/verify_otp", async (req, res) => {
  try {
    const { user_id, otp } = req.body;

    const user = await LoginModel.findOne({ user_id });

    if (!user || user.otp !== otp) {
      console.log(user, otp, user.otp);
      res.json({ success: false, message: "Invalid OTP" });
    } else {
      res.send({ success: true, message: "OTP Verification Successful" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
  }
});

app.post("/addToCart", async (req, res) => {
  try {
    const obj = req.body;
    const data = await UserModel.findOne({ user_id: obj.user_id });
    if (!data) {
      res.send("Error!");
    }
    console.log(obj);
    UserModel.updateOne(
      { user_id: obj.user_id },
      { $push: { userCart: obj.curr_item } }
    ).then(res.send("Inserted!"));
  } catch (error) {
    console.log(error);
  }
});

app.get("/getCartItems", async (req, res) => {
  try {
    let user_id = req.query.user_id;
    const data = await UserModel.findOne({ user_id: user_id });
    if (!data) {
      res.send("Error! User Not Found.");
    }
    let usercart = data.userCart;
    // console.log(usercart)
    res.json({ success: true, usercart });
  } catch (error) {}
});

app.post("/removeItem", async (req, res) => {
  try {
    const { user_id, item_id } = req.body;
    const data=await UserModel.updateOne(
        { user_id: user_id },
        { $pull: { userCart: { _id: item_id } } }
      );
      if(data){
          res.send("Deleted!");
      }
  } 
  catch (error) {
    console.log(error);
  }
});

app.post("/removeAll", async (req, res) => {
    try {
        const { user_id } = req.body;
        const data=await UserModel.updateOne(
            { user_id: user_id },
            { $set:{userCart:[]} }
          );
          if(data){
              res.send("Deleted!");
          }
      } 
      catch (error) {
        console.log(error);
      }
});

app.post("/payment", async (req, res) => {
  const amount = req.body;
  // console.log(amount.amount)
  let instance = new Razorpay({
    key_id: "rzp_test_76e4ieVsAHAdjT",
    key_secret: "u1rWlkzLqyaW9oHdA3PpHaFa",
  });
  let options = {
    amount: amount.amount * 100,
    currency: "INR",
    line_items_total: amount.amount * 100,
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      console.log(err);
    }
    res.json(order);
  });
});

app.post("/forgot_pass", async (req, res) => {
    try {
      const { userID } = req.body;
      const user = await LoginModel.findOne({ user_id:userID });
      if (!user) {
        res.json({success:false,message:"User Not Found!"});
      }
  
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "dipanshu.a.mishra06@gmail.com",
          pass: "xybatwjbiiossxlv",
        },
      });
  
      const otp = Math.floor(Math.random() * 10000);
  
      const mailOptions = {
        from: "dipanshu.a.mishra06@gmail.com",
        to: "dipanshu.a.mishra06@gmail.com",
        subject: "Login OTP for CPC Canteen",
        text: `Dear ${user.email_id},\n\nYour OTP for the CPC Canteen Password Reset is:\n\n${otp}\n\nThe OTP is valid only for 5 minutes.\n\nThank You for using CPC Canteen!`,
      };
  
      await transporter.sendMail(mailOptions);
  
      let otpreg = await LoginModel.updateOne(
        { user_id:userID },
        { $set: { otp: otp.toString() } }
      );
      console.log(otpreg);
  
      res.json({ success: true, message: "OTP Sent Successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.json({ success: false, message: "Failed to Send OTP!!" });
    }
  });

app.post("/change_pass", async (req, res) => {
    try {
      const { user_id, newPass } = req.body;
      const hashedpass = await bycrypt.hash(newPass, 10);
      const user = await LoginModel.findOne({ user_id });
      if (!user) {
        res.json({ success: false, message: "User Not Found!" });
      }
      let result = await LoginModel.updateOne({user_id},{$set:{password:hashedpass}});
      if(result){
        res.json({ success: true, message: "Password Changed Successfully" });
      }
      else{
        res.json({ success: false, message: "Failed to Change Password" });
      }
    } catch (error) {
      console.error("Error changing password:", error);
      res.json({ success: false, message: "Failed to Change Password" });
    }
  })