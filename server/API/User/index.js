import Express from "express";

const Router = Express.Router();

import { UserModel } from "../../Database/allModels";

/* 
Route           /
Description     Get a user data
Params          _id
Body            none
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);

    return res.json({ user: getUser });

  } catch (error) {
    return res.status(201).json({ error: error.message });
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
Router.put("/update/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const {userData} = req.body;

    const updatedUserData = await UserModel.findByIdAndUpdate(userId, {$set: userData}, {new: true});

    return res.json({ user: "Successfully updated user data!" });
  } catch (error) {
    return res.status(201).json({ error: error.message });
  }
});

export default Router;
