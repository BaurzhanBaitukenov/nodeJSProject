const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    imageURL: {
        type: String,
        required: true
    },
    price: Number,
    description: String
})
module.exports = mongoose.model('Product', productSchema);