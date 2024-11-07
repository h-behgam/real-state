import mongoose from "mongoose";

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;

    mongoose.set("strictQuery", false);
    // console.log("Connected");
    await mongoose.connect(process.env.MONGO_URI as string);
    // console.log("Connected to DB");
    
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
