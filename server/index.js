import  Express  from "express";
const Zomato = Express();

Zomato.get("/", (req, res) => {
    res.json({message: "Success!"})
})

Zomato.listen(3000, () => console.log("Server is running"))