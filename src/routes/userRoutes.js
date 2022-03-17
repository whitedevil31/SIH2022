const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const bcrypt = require('bcryptjs')

router.post('/register',async(req,res)=>{
  try{
   const mobileNumber = req.body.mobileNumber;
   const saltRounds = 12;
   const salt = await bcrypt.genSalt(saltRounds);
   const mobileHash = await bcrypt.hash(mobileNumber, salt);
const registerUser = new User({mobileNumber:mobileHash})
await registerUser.save()
res.status(200).json({message:"User registered"})
  }catch(err)
  {
console.log(err)
res.json(400).json("Something went wrong ")
  }
})

module.exports = router;
