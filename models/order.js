const mongoose = require('mongoose');

const { ObjectId, Number } = mongoose.Schema.Types;

const orderSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  products: [
    {
      quantity: {
        type: Number,
        default: 1
      },
      product: {
        type: ObjectId,
        ref: "Product"
      }
    }
  ],
  email: {
      type: String,
      required: true
  },
  total: {
      type: Number,
      required: true
  }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order };

// export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
