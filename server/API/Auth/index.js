//libraries
import Express from "express";
import bcrypt from "bcryptjs";

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
    //check if the user exists
    await UserModel.findByEmailAndPhone(req.body.credentials);
    
    //if user doesnt exists store in db
    const newUser = await UserModel.create(req.body.credentials);

    //generate jwt token
    const token = newUser.genJwtToken();
    
    //return token
    return res.status(200).json({ token });
  } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

/* 
Route           /signin
Description     Signin with email and password
Params          None
Access          Public
Method          POST
*/
Router.post("/signin", async (req, res) => {
  const { email, password } = req.body.credentials;
  const user = await UserModel.findOne({ email });
  //check if the user exists
  if(user) {
    //check password
    bcrypt.compare(password, user.password, (error, res) => {
      if(error)
        throw new Error(error);
      if(!res)
        throw new Error("Invalid password");
    });
    const token = user.genJwtToken();
    res.status(200).json({message: "Success", token: token});
  }
  else {
    res.status(201).json({Failed: "User doesn't exists"});
  }
});

export default Router;
