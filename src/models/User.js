import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: String,
    phoneNumber: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model('User', Schema);