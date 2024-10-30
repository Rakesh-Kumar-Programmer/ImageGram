import mongoose from "mongoose";

const postschema = new mongoose.Schema({
   
    caption :{
        type: String,
        required: true,
        minLenth: 5
        
    },
    image:{
        type: String,
        required: true
    },
    
     user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const post = mongoose.model("Post", postschema);

export default post;