//libraries
import Express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//
const Router = Express.Router();

// Models
import { UserModel } from "../../Database/allModels";

// API

/* 
Route           /signup
Description     Signup with email and password
Params          None
Access          Public
Method          POST
*/
Router.post("/signup", async (req, res) => {
  try {
    const { email, password, fullname, phoneNumber } = req.body.credentials;

    // checking whether the email/phoneNumber exists
    const checkUserByEmail = await UserModel.findOne({ email });

    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    // if user exists
    if (checkUserByEmail || checkUserByPhone) {
      return res.json({ error: "User already exists!" });
    }

    // if new user, encrypt and store password
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPwd = await bcrypt.hash(password, bcryptSalt);

    // creating a token
    const token = await jwt.sign(
      { user: { fullname, email, phoneNumber } },
      process.env.tokenKey
    );

    // store in db
    await UserModel.create({ ...req.body.credentials, password: hashedPwd });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
