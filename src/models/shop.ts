import { Schema, model } from "mongoose";

const ShopSchema = new Schema({
    

    logo: {
        type: String,
        required: true
    },

    coverImage: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: [{
        type: String,
        required: true
    }],
    phone: [{
        type: Number,
        required: true
    }],

    open: {
        type: Boolean,
        default: false,
    },

    social: [
        {
            company : String,
            url: String,
            icon: String,
            color: String
      }
    ]

})

export default model("Shop", ShopSchema)