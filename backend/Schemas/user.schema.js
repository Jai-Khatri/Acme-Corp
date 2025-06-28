import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Account already exists"]

    },
    password:{
        type: String,
        required:[true, "Password is required"]
    }
}, 
{versionKey: false, timestamps: true})

const User = mongoose.model("user" , userSchema)

export default User;