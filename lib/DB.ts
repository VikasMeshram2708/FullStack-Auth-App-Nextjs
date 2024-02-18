import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI!);
    console.log("Connected to Db Successfully.");
  } catch (error) {
    console.log(
      error instanceof Error
        ? error.message
        : "Error connecting to database try again."
    );
  }
};
