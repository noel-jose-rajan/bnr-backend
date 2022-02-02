import { Schema, model } from "mongoose";

const HeroSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    accessLevel: {
        type: Number,
        default: 1
    },
    active: {
        type: Boolean,
        default: false,
    },

    
})

export default model("Hero", HeroSchema)