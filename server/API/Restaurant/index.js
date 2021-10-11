import {RestaurantModel} from "../../Database/allModels";
import express from "express";

const Router = express.Router();

/* 
Route           /
Description     Get all restaurants details
Params          None
Access          Public
Method          GET
*/
Router.get("/", async (req, res) => {
    try {
        //get city query from url
        const {city} = req.query;
        //find all the restaurants from the given city
        const restaurants = await RestaurantModel.find({city});

        return res.json({restaurants});
    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

/* 
Route           /
Description     Get a particular restaurant
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try{
        //get id parameter from url
        const {_id} = req.params;
        //find restaurant
        const restaurant = await RestaurantModel.findOne(_id);
        //if restaurant not found
        if(!restaurant)
            return res.status(404).json({error: "Restaurant not found!"});
    
        return res.json({restaurant});
    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

/* 
Route           /
Description     Get restaurant details search
Params          none
Body            searchString
Access          Public
Method          GET
*/
Router.get("/search", async (req, res) => {
    try {
        const {searchString} = req.body;

        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"}
        });
    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;