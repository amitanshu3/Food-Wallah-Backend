import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        //db connection
        await mongoose.connect(process.env.db_url);
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1);
    }
};
//mongodb://127.0.0.1:27017/Food-Delivery