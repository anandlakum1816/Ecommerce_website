import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Success Message
    console.log(`✅ MongoDB Connected Successfully!`);
  } catch (error) {
    console.log(`❌ MongoDB Connection Failed!`);
    process.exit(1);
  }
};

export default connectDB;