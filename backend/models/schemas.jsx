const mongoose=require("mongoose");


//  user schema 



const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true

    },
    password:{
         type:String,
         require:true
    },
    status: {
        type: String,
       enum: ['admin', 'user'],
        default: 'user'
    }
 
},{
        timestamps:true
    
});

module.exports.username=mongoose.model("username",userSchema);

       

// recommendations schema 



const recommendationsSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true

    },
    email:{
        type:String,
        require:true,
        unique:true
        
    },
    review:{
        type:String,
        require:true,
        
    }},{
        timestamps:true

})


module.exports.recommendations=mongoose.model("recommendations",recommendationsSchema);