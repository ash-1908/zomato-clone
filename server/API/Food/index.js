//libraries
import Express from "express";

//database model
import {FoodModel} from "../../Database/allModels";

//middleware
const Router = Express.Router();

//validation
import {ValidateRestaurantId, ValidateCategory} from "../../Validation/food";

/* 
Route           /
Description     Get all foods from a particular restaurant
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        
        const foods = await FoodModel.find({restaurant: _id});
        return res.json({foods});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

/* 
Route           /c
Description     Get all foods based on particular category
Params          _id
Access          Public
Method          GET
*/
Router.get("/c/:category", async (req, res) => {
    try {
        await ValidateCategory(req.params);

        const {category} = req.params;
        const foods = await FoodModel.find({
            category: {
                $regex : category, $options: "i"
            }
        });
        return res.json({foods});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;