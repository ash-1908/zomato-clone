import Mongoose from "mongoose";

const ReviewSchema = new Mongoose.Schema({
  food: { type: Mongoose.Types.ObjectId, ref: "Foods" },
  restaurant: { type: Mongoose.Types.ObjectId, ref: "Restaurants" },
  user: { type: Mongoose.Types.ObjectId, ref: "Users" },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
  photos: [
    {
      type: Mongoose.Types.ObjectId,
      ref: "Images",
    },
  ],
});

export const ReviewModel = Mongoose.Model("Reviews", ReviewSchema);
