const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    image: String,
    rank: Number  // ✅ Added rank field
});

module.exports = mongoose.model('Product', ProductSchema);
