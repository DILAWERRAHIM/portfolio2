const mongoose=require("mongoose");
const {url}=require("./config");
const connect=async()=>{
    try {
        await mongoose.connect(url);
        console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
    }
}
module.exports=connect;