//external module
const path=require("path")
const express=require("express");
const rootdir=require("../utils/pathUTIL")
const {registerhomes}=require("./hostRouter")
const userRouter=express.Router();

 userRouter.get("/",(req,res,next)=>{
  console.log(registerhomes);
     res.render('home',{registerhomes
     });
    
 })
 module.exports=userRouter;