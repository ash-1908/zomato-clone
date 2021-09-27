import Mongoose from "mongoose";

const MenuSchema = new Mongoose.Schema({
  menus: [
    {
      name: { type: String, req: true },
      items: [
        {
          type: Mongoose.Types.ObjectId,
          ref: "Foods",
          required: true,
        },
      ],
    },
  ],
  recommendations: [
    {
      type: Mongoose.Types.ObjectId,
      ref: "Foods",
      unique: true,
    },
  ],
});

export const MenuModel = Mongoose.Model("Menus", MenuSchema);
