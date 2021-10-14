//libraries
import GoogleOAuth from "passport-google-oauth20";
import { UserModel } from "../Database/Users";
require("dotenv").config();

//strategy
const GoogleStrategy = GoogleOAuth.Strategy;

//signin with google function
export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        //creating a new user
        const newUser = {
          email: profile.emails[0].value,
          fullName: profile.displayName,
        };

        try {
          let user = await UserModel.findOne({ email: newUser.email });

          //if user doesn't exists
          if (!user) {
            user = await UserModel.create(newUser);
          }

          //create token
          const token = user.genJwtToken();

          done(null, { user, token });
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};
