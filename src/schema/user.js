import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        minlength : 3,
        maxlength : 16
    },
    email : {
        type : String,
        required : true,
        unique : true,
        match : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: "Invalid email format"
        },
        lowercase : true,
        maxlength : 50,
        minlength : 5
    },
    password : {
        type : String,
        required : true,
        minlength : 8,
        maxlength : 100
    }

},{timestamps: true});   

const user = mongoose.model("user",userschema); // user colection

export default user;