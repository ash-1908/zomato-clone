import { Mongoose } from "mongoose";

const UserSchema = new Mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  address: [{ details: { type: String }, type: { type: String } }],
  phoneNumber: { type: Numebr },
});

export const UserModel = Mongoose.model("Users", UserSchema);
