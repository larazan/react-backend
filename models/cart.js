const mongoose = require('mongoose');

const { ObjectId, Number } = mongoose.Schema.Types

const cartSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  products: [
    {
      quantity: {
        type: Number,
        default: 1
      },
      product: {
        type: ObjectId,
        ref: 'Product'
      }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart };
