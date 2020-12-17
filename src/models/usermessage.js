const mongoose = require("mongoose")

const validator = require("validator");

const userSchmea = mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 3
    },
    email: {
        type: String,
        require: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email id")
            }
        }
    },
    phone: {
        type: Number,
        require: true,
        min: 10
    },
    message: {
        type: String,
        require: true,
        minLength: 3
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// we need to create a mongoose.Collection 

const User = mongoose.model("User", userSchmea);

module.exports = User;