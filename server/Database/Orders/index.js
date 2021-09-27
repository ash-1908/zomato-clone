import Mongoose from "mongoose";

const OrderSchema = new Mongoose.Schema({
  user: {
    type: Mongoose.Types.ObjectId,
    ref: "Users",
  },
  orderDetails: [
    {
      food: { type: Mongoose.Types.ObjectId, ref: "Foods" },
      quantity: { type: Number, required: true, max: 20 },
      payMode: { type: String, required: true },
      status: { type: String, default: "Placed" },
      paymentDetails: {
        itemTotal: { type: Number, required: true },
        promo: { type: Number },
        tax: { type: Number, required: true },
      },
    },
  ],
  orderRating: {
    type: Number,
    required: true,
  },
});

export const OrderModel = Mongoose.model("Orders", OrderSchema);