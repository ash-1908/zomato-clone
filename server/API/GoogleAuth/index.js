import { UserModel } from "../../Database/allModels";
import passport from "passport-google-oauth2";
const GoogleStrategy = passport.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (accessToken, refreshToken, profile, done) {
      const email = profile.email[0].value;
      const fullName = profile.displayName;

      //check whether the user exists
      let user = await UserModel.findOne({email});

      if(!user){
          user = await UserModel.create({email, fullName});
      }
        
      //generate token
        const token = user.genJwtToken();
        console.log(token);
        done();
    }
  )
);
