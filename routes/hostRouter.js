const path=require("path");
const express =require("express");
const hostRouter=express.Router();
const rootdir=require("../utils/pathUTIL")




 hostRouter.get("/host/add-home",(req,res,next)=>{
  res.render('add-home')
   
 })
 const registerhomes=[]
  hostRouter.post("/host/add-home",(req,res,next)=>{
     console.log('home Registration successful for',req.body)
     registerhomes.push({houseDetail:req.body})
  res.render('home-added')
 })

 exports.hostRouter=hostRouter;
 exports.registerhomes=registerhomes;