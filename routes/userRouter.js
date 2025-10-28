//external module
const path=require("path")
const express=require("express");
const rootdir=require("../utils/pathUTIL")
const userRouter=express.Router();

 userRouter.get("/",(req,res,next)=>{
  console.log(__dirname)
    res.sendFile(path.join(rootdir,"views","home.html"));
    
 })
 module.exports=userRouter;