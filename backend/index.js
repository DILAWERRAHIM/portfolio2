const express=require("express");
const app=express();
const cors = require('cors');



// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// imported modules 


const router
=require("./routes/routes.jsx");
const connect=require("./databases");
const {Port}=require("./config");
// router

app.use("/",router);
 
// connections
const start=async()=>{
   await connect();
   app.listen(Port,()=>{
    console.log(`app is listening on ${Port}`);
   })
}

start();