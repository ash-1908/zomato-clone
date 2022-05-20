import Express from "express";
import passport from "passport";

const Router = Express.Router();

import { UserModel } from "../../Database/allModels";

/* 
Route           /
Description     Get a user data
Params          none
Body            none
Access          Public
Method          GET
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { email, password, address, fullName } = req.session.passport.user._doc;
    return res.json({ user: { email, password, address, fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* 
Route           /
Description     Get a user data
Params          _id
Body            none
Access          Public
Method          GET
*/
Router.get("/:_id", passport.authenticate("jwt"), async (req, res) => {
  try {
    const id = req.params._id;
    const user = await UserModel.findById(id);
    const { fullName } = user;
    return res.json({ user: { fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* 
Route           /update
Description     Update a user
Params          userId
Body            user data
Access          Public
Method          PUT
*/
Router.patch("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const {userData} = req.body;

    const updatedUserData = await UserModel.findByIdAndUpdate(userId, {$set: userData}, {new: true});

    return res.json({ user: updatedUserData });
  } catch (error) {
    return res.status(201).json({ error: error.message });
  }
});

export default Router;
