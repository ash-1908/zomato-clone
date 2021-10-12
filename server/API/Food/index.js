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
        const {_id} = req.params;
        await ValidateRestaurantId(_id);
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
        const {category} = req.params;
        await ValidateCategory(category);
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