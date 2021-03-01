const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
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
    countryCode: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true,
})

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;