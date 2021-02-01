const user = require("express").Router();

const Users = {
    "Praveen":"hello@123",
    "Rishav" :"ris@2000",
    "Ankit":"ank@2000"
  }

user.get("/",(req,res) => {
  if (!!req.session.User) {
  res.json("Welcome to /api/user")
  }else{
    res.status(404).json({
      Error:true,
      Success:false,
      Message:"User not LogedIn!"
    })
  }
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
    req.session.User = {
        Name:username
      }
    res.json({
      Error:false,
      Success:true,
      Message:{
        Name:username
      }
    })
  }
});
user.post("/register",(req,res) => {
  const {username,password} = req.body;
  if (Users[username]) {
    res.status(409).json({
      Error:true,
      Success:false,
      Message:`User ${username} already exists.`
    });
  }else{
    if (!username /*used for username:null*/|| username.length < 4 || password.length < 4) {
      res.status(400).json({
        Error:true,
        Success:false,
        Message:`Both password and username should be at least 4 character long.`
      })
    }else{
    Users[username] = password;
    res.json({
      Error:false,
      Success:true,
      Message:`Created new user ${username}.`
    })
  }
  }
});
user.post("/logout",(req,res) => {
  req.session.destroy();
  res.status(202).json({
    Error:false,
    Success:true,
    Message:`User Successfully loged out. `
  })
});

module.exports = user;