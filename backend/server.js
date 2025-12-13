import express from "express";
import "dotenv/config.js";
import { connectToDatabase } from "./db/connect.js";
import { Book } from "./model/book.model.js";

const app = express();

app.use(express.json());

app.post("/api/v1/books", async (req,res)=>{
    const{ title,subtitle,author,genre,cover }=req.body;
    try{
        const book = new Book({title, subtitle,author, genre, cover});
        await book.save(); 
        res.status(201).json({sucess:true, data:book});       
    }catch(error){
        console.error("Error saving book",error);
        res.status(500).json({sucess:false, error:"Erro durante cadastro."});
    }
});

app.listen (3000, ()=>{
    console.log("Server is running on port 3000. CTRL + C to stop.");
    connectToDatabase();
});


//mongodb+srv://andersonbarros_db_user:09g13xeDd3gtB207@cluster0.jhh3zfd.mongodb.net/?appName=Cluster0
//user: andersonbarros_db_user
//password: 09g13xeDd3gtB207

 

