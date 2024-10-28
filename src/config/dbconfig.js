import mongoose from "mongoose";

import { newdata } from "./serverConfig.js";

export default async function connectDB() {
    try {
        // Adding connection options
        await mongoose.connect(newdata);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Something went wrong while connecting to MongoDB');
        console.error(error.message);
        process.exit(1);  // Exit process with failure code
    }
}
