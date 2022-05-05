//libraries
import Express from "express";
import passport from "passport";

//database model
import {FoodModel} from "../../Database/allModels";

//middleware
const Router = Express.Router();

//validation
import {ValidateRestaurantId, ValidateCategory} from "../../Validation/food";


// GET METHODS

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
Params          category name
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


// POST METHODS

/* 
Route           /new
Description     Add new food record
Params          none
Access          Private
Method          POST
*/
Router.post("/new", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { foodData } = req.body;
      const newFood = await FoodModel.create(foodData);
      return res.json({ foods: newFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


//PATCH METHODS

/* 
Route           /update
Description     Update existing food record
Params          none
Access          Private
Method          PATCH
*/
Router.patch("/update", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { foodData } = req.body;
      const updateFood = await FoodModel.findByIdAndUpdate(
        foodData._id,
        {
          $set: foodData,
        },
        { new: true }
      );
  
      if (!updateFood)
        return res.status(404).json({ foods: "Food record Not Found!!!" });
  
      return res.json({ foods: updateFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


//DELETE METHODS

/* 
Route           /delete
Description     Delete existing food record
Params          none
Access          Private
Method          DELETE
*/
Router.delete("/delete/:_id", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
      const { _id } = req.params;
      const deleteFood = await FoodModel.findByIdAndRemove(_id);
  
      return res.json({ foods: Boolean(deleteFood) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
export default Router;