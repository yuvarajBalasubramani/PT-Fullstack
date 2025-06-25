import  express from 'express';
import mongoose from 'mongoose';
import {connectDB} from './config/db.js';
import User from './model/user.js';
import cors from 'cors';
import Form from './model/form.js';

const app=express();

app.use(express.urlencoded())
connectDB()

app.use(express.json());
app.use(cors())


app.methodFind=(req,res,next)=>{
    console.log('${req.method}${req.url}');
    next();
}

app.get('/get',async(req,res)=>{
    const user= await User.find();
    res.json(user);
})
app.post('/post',async(req,res)=>{
   try{
    const newUser=new User(req.body)
    newUser.save()
    res.json(newUser)
   }
   catch(error){
    res.status(401).json(error)
   }
});
app.post('/postform',async(req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.json(newUser)
    }
    catch(error){
        res.status(401).json(error)
    }
})

app.get('/getform/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.json(user);
    }
    catch(error){
        res.status(404).json({message:'User not found'})
    }
})

app.put('/put/:id',async(req,res)=>{
    try{
    const update=await User.findByIdAndUpdate(req.params.id,req.body)
    res.json(update)
    }
    catch(error){
        res.json(error)
    }
})

app.delete('/delete/:id',async(req,res)=>{
    const deleteUser=await User.findByIdAndDelete(req.params.id);
    res.json(deleteUser);
})


app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})