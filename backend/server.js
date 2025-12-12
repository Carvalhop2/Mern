import express from 'express';
import "dotenv/config.js";
import mongoose from "mongoose";


const app = express();
export async function connectToDatabase() {
   try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB database:", error);
    process.exit(1);
}


app.listen (3000, () => {
    console.log('Server is running on port 3000. CLTR+C to stop. Eita Deus');
    connectToDatabase();
});

}

// MongoDB. User: wellingtonp2oc_db_user. Senha:MDB: B2MVoIvhd1dQQcZR