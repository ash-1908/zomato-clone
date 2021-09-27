import Mongoose from "mongoose";

const FoodSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isVeg: { type: Boolean, required: true },
  containsEgg: { type: Boolean, required: true },
  category: { type: String, required: true },
  photos: {
    type: Mongoose.Types.ObjectId,
    ref: "Images",
  },
  price: { type: Number, default: 100, required: true },
  addOns: [
    {
      type: Mongoose.Types.ObjectId,
      ref: "Foods",
    },
  ],
  restaurant: {
    type: Mongoose.Types.ObjectId,
    ref: "Restaurants",
    required: true,
  },
});

export const FoodModel = Mongoose.model("Foods", FoodSchema);
