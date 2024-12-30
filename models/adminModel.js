const mongoose = require("mongoose")
 
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 20,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 50,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true,
        trim: true,
        lowercase: true
    }
})

export const admin = mongoose.model("admin", adminSchema)