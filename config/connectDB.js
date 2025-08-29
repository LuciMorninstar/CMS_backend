import mongoose from "mongoose"

const connectDB = async()=>{

    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Database successfuly connected");

        
    } catch (error) {
        console.log(`Error Connecting to the DATABASE URI ${process.env.DATABASE_URI}`);
        
    }

}

export default connectDB;