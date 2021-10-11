// libraries
import Express from "express";
import Cors from "cors";
import Helmet from "helmet";

// env
require("dotenv").config();

//API
import Auth from "./API/Auth";


//database connection
import ConnectDB from "./Database/connection";

const Zomato = Express();

Zomato.use(Express.urlencoded({ extended: true }));
Zomato.use(Express.json());
Zomato.use(Cors());
Zomato.use(Helmet());

Zomato.use("/auth", Auth);

Zomato.get("/", (req, res) => {
  res.json({ message: "Success!" });
});

Zomato.listen(3000, () => {
  console.log("Server is running");
  ConnectDB()
    .then(() => console.log("Database is connected!"))
    .catch(() => console.log("Database connection failed!"));
});
