import mongoose from 'mongoose';
export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected successfully');
    }catch(error){
        console.error(error);
    
    }
}
