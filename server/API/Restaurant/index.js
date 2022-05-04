// Express
import express from "express";

//Restaurant database model
import { RestaurantModel } from "../../Database/allModels";

// initialising Express Router
const Router = express.Router();

// Validation methods
import {
    ValidateRestaurantCity,
    ValidateRestaurantId,
    ValidateRestaurantSearchString,
} from "../../Validation/restaurant";

// APIs


// GET METHODS


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
        const { city } = req.query;
        //find all the restaurants from the given city
        const restaurants = await RestaurantModel.find({ city });

        return res.json({ restaurants });
    } catch (error) {
        return res.status(201).json({ error: error.message });
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
    try {
        await ValidateRestaurantId(req.params);

        //get id parameter from url
        const { _id } = req.params;
        //find restaurant
        const restaurant = await RestaurantModel.findOne(_id);
        //if restaurant not found
        if (!restaurant)
            return res.status(404).json({ error: "Restaurant not found!" });

        return res.json({ restaurant });
    } catch (error) {
        return res.status(201).json({ error: error.message });
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

        const { searchString } = req.params;

        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" }
        });

        return res.json({ restaurants });

    } catch (error) {
        return res.status(201).json({ error: error.message });
    }
});


// POST METHODS


/* 
Route           /new
Description     add new restaurant 
Access          PRIVATE
Method          POST
*/

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const newRetaurant = await RestaurantModal.create(req.body.retaurantData);
        return res.json({ restaurants: newRetaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


// PATCH METHODS


/* 
Route           /update
Description     update exisitng restaurant data 
Access          PRIVATE
Method          PATCH
*/

Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
        const updatedRestaurant = await RestaurantModal.findByIdAndUpdate(
            req.body.retaurantData._id,
            { $set: req.body.retaurantData },
            { new: true }
        );
        if (!updatedRestaurant)
            return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });

        return res.json({ restaurants: updatedRestaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



// DELETE METHODS

/* 
Route           /delete
Description     delete an exisitng restaurant 
Access          PRIVATE
Method          DELETE
*/

Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
        const deleteRestaurant = await RestaurantModal.findByIdAndRemove(
            req.body.retaurantData._id
        );
        return res.json({ restaurants: Boolean(deleteRestaurant) });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;