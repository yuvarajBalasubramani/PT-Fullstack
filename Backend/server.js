import  express from 'express';
import mongoose from 'mongoose';
import {connectDB} from './config/db.js';
import User from './model/user.js';

const app=express();


connectDB()

app.get('/get',async(req,res)=>{
    const user= await User.find();
    res.json(user);
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})