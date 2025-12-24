// connects to the database created in mongoose atlas
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(`connected to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("connection failed");
    process.exit(1);
  }
};

export default connectDB;
