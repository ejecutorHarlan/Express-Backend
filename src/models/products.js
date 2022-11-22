const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    maxLength: 100,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    unique: true,
  },
  stock: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxLength: 500,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Products', ProductsSchema);
