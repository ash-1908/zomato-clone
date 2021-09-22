import  Express  from "express";
import Cors from "cors";
import Helmet from "helmet";

const Zomato = Express();

Zomato.use(Express.urlencoded({extended: false}));
Zomato.use(Express.json());
Zomato.use(Cors());
Zomato.use(Helmet());

Zomato.get("/", (req, res) => {
    res.json({message: "Success!"})
})

Zomato.listen(3000, () => console.log("Server is running"))