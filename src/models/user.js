const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true,
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: Number,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
