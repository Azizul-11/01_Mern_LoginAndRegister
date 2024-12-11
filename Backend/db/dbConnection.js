const mongoose=require('mongoose');


const connectDB = async()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/LoginDb');
       console.log("connected to MongoDB");
   } catch (error) {
    console.log("error connecting to MongoDB", error);
   }
}


module.exports=connectDB;