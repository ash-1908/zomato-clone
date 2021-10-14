import {RestaurantModel} from "../../Database/allModels";
import express from "express";

const Router = express.Router();

import {
  ValidateRestaurantCity,
  ValidateRestaurantId,
  ValidateRestaurantSearchString,
} from "../../Validation/restaurant";

/* 
Route           /
Description     Get all restaurants details based on city
Params          None
Access          Public
Method          GET
*/
Router.get("/:city", async (req, res) => {
    try {
        await ValidateRestaurantCity(city);

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
Description     Get a particular restaurant based on id
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try{
        await ValidateRestaurantId(req.params);

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
Description     Get restaurant details from search
Params          searchString        
Access          Public
Method          GET
*/
Router.get("/:searchString", async (req, res) => {
    try {
        await ValidateRestaurantSearchString(req.params);

        const {searchString} = req.params;

        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"}
        });
        
        return res.json({restaurants});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;