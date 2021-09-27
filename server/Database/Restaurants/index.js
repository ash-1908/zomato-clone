import { Mongoose } from "mongoose";

const RestaurantSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  mapLocation: { type: String, required: true },
  cuisine: [String],
  restaurantTimings: [String],
  contactNumber: Number,
  website: String,
  popularDishes: [String],
  averageCost: Number,
  amenties: [String],
  menuImages: {
    type: Mongoose.Types.ObjectId,
    ref: "Images",
  },
  menu: { type: Mongoose.Types.ObjectId, ref: "Menus" },
  reviews: [
    {
      type: Mongoose.Types.ObjectId,
      ref: "Reviews",
    },
  ],
  photos: 
    {
      type: Mongoose.Types.ObjectId,
      ref: "Images",
    }
});

export const RestaurantModel = Mongoose.model("Restaurants", RestaurantSchema);
