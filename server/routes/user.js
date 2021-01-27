const user = require("express").Router();

const Users = {
    "Praveen":"hello@123",
    "Rishav" :"ris@2000",
    "Ankit":"ank@2000"
  }

user.get("/",(req,res) => {
  res.json("Welcome to /api/user")
});
user.post("/login",(req,res) => {
  const {username,password} = req.body;
  if (!Users[username]) {
    //User not found.
      req.session.destroy();
      res.status(404).json({
        Error:true,
        Success: false,
        Message:"User not found!"
      })
  }else if (Users[username] !== password) {
    //Password is incorrect.
    req.session.destroy();
    res.status(403).json({
      Error:true,
      Success:false,
      Message:"Invalid Username and Password!"
    })
  }else{
    //Password is correct.
    res.json({
      Error:false,
      Success:true,
      Message:{
        Name:username
      }
    })
  }
});

module.exports = user;