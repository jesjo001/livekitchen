const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    firstName : {
        type: String,
        required: true,
        minlength: 5
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address1: {
        type: String,
        required: true,
        minlength: 5
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    },
    dob: {
        type: Date,
        required: true,
    }
},{
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;