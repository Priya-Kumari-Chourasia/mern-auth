import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
        unique: true,
    },
    email:{
        type: 'string',
        required: true,
        unique: true,
    },
    passwords:{
        type: 'string',
        required: true,
    }

},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;