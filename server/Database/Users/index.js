import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: String,
  address: [{ details: { type: String }, type: { type: String } }],
  phoneNumber: Number,
});

export const UserModel = Mongoose.model("Users", UserSchema);
