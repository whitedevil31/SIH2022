const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();


router.post('/',(req,res)=>{
  try{
    res.json("hello")
  }catch(err)
  {

  }
})

module.exports = router;
