//libraries
import Express from "express";
// import passport from "passport";

//
const Router = Express.Router();

// Models
import { UserModel } from "../../Database/allModels";

//Validation
import {
  ValidateSignup,
  ValidateSignin,
} from "../../Validation/Authentication";


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
    await ValidateSignup(req.body.credentials);

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
  try{
    await ValidateSignin(req.body.credentials);


    //check if the user exists
    const user = await UserModel.checkUserByEmail(req.body.credentials);
  
    const token = user.genJwtToken();
    
    res.status(200).json({message: "Success", token});

  } catch (error){
    return res.status(201).json({error: error.message})
  }
});

/* 
Route           /google
Description     Google signin
Params          None
Access          Public
Method          GET
*/
// Router.get("/google", passport.authenticate("google", {
//   scope: [
//     "https://www.googleapis.com/auth/userinfo.profile",
//     "https://www.googleapis.com/auth/userinfo.email"
//   ]
// }));

/* 
Route           /google/callback
Description     Google Signin callback
Params          None
Access          Public
Method          GET
*/
// Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}), (req, res) => {
//   return res.json({token: req.session.passport.user.token});
// });

export default Router;
