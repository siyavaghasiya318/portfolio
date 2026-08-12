import mongoose, { model } from "mongoose";


export const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
}, {timestamps:true})

const User = mongoose.model("user", UserSchema)
export default User
