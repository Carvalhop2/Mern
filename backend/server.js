import express from 'express';
import "dotenv/config.js";
import { connectToDatabase } from './db/connect.js';
import { Book } from './model/book.model.js';


const app = express();

app.use(express.json());

app.post("/api/v1/books", async (req, res) => {
    
    const { title, subtitle, author, genre, cover } = req.body;
    
    try{
        const book = new Book({title, subtitle, author, genre, cover});
        await book.save();
        res.status(201).json({sucess: true, data: book });
    }
    catch (error) {
        console.error("Error saving book:", error);
        res.status(500).json({sucess: false, message: "Erro durante o cadastro"});        
    }

});

    app.get("/api/v1/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({sucess: true, data: books}); 
    } catch (error) {
        console.error("Erro na busca por livos:", error);
        res.status(500).json({sucess: false, erro: "Erro ao buscar por livro"});
    }     
}); 

app.listen (3000, () => {
    console.log('Server is running on port 3000. CLTR+C to stop. Teste do Servidor');
    connectToDatabase();
});



// MongoDB. User: wellingtonp2oc_db_user. Senha:MDB: B2MVoIvhd1dQQcZR