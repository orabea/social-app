import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL as string).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.error("Database connection failed:", error);
    });
}
