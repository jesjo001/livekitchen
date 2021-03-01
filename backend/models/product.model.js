const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    weight: { type: String, require: false },
    sellerId: { type: String, require: true },
    description: { type: String, require: true },
}, {
    timestamps: true,
})


const Product = mongoose.model('Exercise', productSchema);
module.exports = Product