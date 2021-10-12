// libraries
import Express from "express";
import Cors from "cors";
import Helmet from "helmet";
//import Passport from "passport";

// env
require("dotenv").config();

//API
import Auth from "./API/Auth";
import Restaurants from "./API/Restaurant";
import Foods from "./API/Food";
import Menus from "./API/Menu";

//Config
//import GoogleConfig from "./Config/Google.config";

//database connection
import ConnectDB from "./Database/connection";

//middlewares
const Zomato = Express();

Zomato.use(Express.urlencoded({ extended: true }));
Zomato.use(Express.json());
Zomato.use(Cors());
Zomato.use(Helmet());
// Zomato.use(Passport.initialize());
// Zomato.use(Passport.session());

Zomato.use("/auth", Auth);
Zomato.use("/restaurant", Restaurants);
Zomato.use("/food", Foods);
Zomato.use("/menu", Menus);

//passport
// GoogleConfig(Passport);

//routes
Zomato.get("/", (req, res) => {
  res.json({ message: "Success!" });
});

Zomato.listen(3000, () => {
  console.log("Server is running");
  ConnectDB()
    .then(() => console.log("Database is connected!"))
    .catch(() => console.log("Database connection failed!"));
});
