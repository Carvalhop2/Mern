import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    subtitle:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    genre:{
        type:String,
        require:true,
    },
    cover:{
        type:String,
        require:true,
    },    
}, 
{timestamps:true});

export const Book = mongoose.model("Book", bookSchema);

