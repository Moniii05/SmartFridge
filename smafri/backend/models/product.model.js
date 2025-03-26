const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  unit: String,
  expiryDate: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
