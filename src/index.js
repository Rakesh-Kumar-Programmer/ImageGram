import express from "express";
import connectDB from "./config/dbconfig.js";

 const PORT = 3000;

 const app = express(); //create express app server instance

 app.get('/',(req,res)=>{
    return res.send("Hello")
 });
 app.get("/ping", (req, res) => {
   return res.json({message: 'pong'});
 });

 app.get("/hello",(req,res)=>{
   return res.json({message:'Hello world'});
 });


 app.post("/hello",(req,res)=>{
    return res.json({message:'Post: Hello world'});
  });

  app.put("/hello",(req,res)=>{
    return res.json({message:'Put: Hello world'});
  });

  app.delete("/hello",(req,res)=>{
    return res.json({message:'Delete: Hello world'});
  });

 app.listen(PORT, ()=>{
   console.log("Server is running on");
   connectDB();
 });


