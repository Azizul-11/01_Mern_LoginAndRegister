const express = require('express');
const app = express();
const port=8000;

const connectDB=require("./db/dbConnection");
const User=require("./db/user");

const cors=require('cors');


//Middleware
app.use(express.json());


//Enable Cors

app.use(cors());

// Registration

app.post('/register', async(req, res)=>{
    try {
        const {username, password}=req.body;
        const user=new User({username, password});
        await user.save();
        res.status(201).json({message: "User Registered Successfully"});
    } catch (error) {
        res.status(500).json({error: "User Registered Error"});
    }
})

// Login

app.post('/login', async(req, res)=>{
    try {
        const {username, password}=req.body;
        const user=await User.findOne({username});
        if(!username)
        {
            return res.status(401).json({error: "Invalid username and Password"});
        }

        if(user.password !== password)
        {
            return res.status(401).json({error: "Invalid username and Password"});
        }
        res.status(200).json({message: "User Login Success"});

    } catch (error) {
        res.status(500).json({error: "User Registered Error"});
    }
})

connectDB();
app.listen(port, ()=>{
    console.log(`Server is Running on port ${port}`);
 });



