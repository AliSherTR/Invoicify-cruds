import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URI || "");
        console.log("DB CONNECTED");
    } catch (error: any) {
        console.log("ERROR CONNECTING TO DATABASE", error.message);
    }
}
