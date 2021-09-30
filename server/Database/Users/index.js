import Mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new Mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: String,
  address: [{ details: { type: String }, type: { type: String } }],
  phoneNumber: Number,
});

UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
  // checking whether the email/phoneNumber exists
  const checkUserByEmail = await UserModel.findOne({ email });

  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  // if user exists
  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exists!");
  }
  return false;
};

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(8, (error, salt) => {
    if (error) throw next(error);

    bcrypt.hash(user.password, salt, (error, hashedPwd) => {
      if (error) throw next(error);

      user.password = hashedPwd;
      return next();
    });
  });
});

UserSchema.methods.genJwtToken = function (){
  // creating a token
  return jwt.sign({ user: this._id.toString() }, process.env.tokenKey);
}

export const UserModel = Mongoose.model("Users", UserSchema);
