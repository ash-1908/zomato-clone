import jwtPassport from "passport-jwt";

import {UserModel} from "../Database/Users";

const JwtStrategy = jwtPassport.Strategy;

const ExtractJwt = jwtPassport.ExtractJwt;

require("dotenv").config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.tokenKey
};

export default (passport) => {
    passport.use(
        new JwtStrategy(options, async (jwt__payload, done) => {
            try {
                const user = await UserModel.findById(jwt__payload.user);
                if(!user) 
                    return done(null, false);
                return done(null, user);
                
            } catch (error) {
                throw new Error(error);
            }
        })
    )
}