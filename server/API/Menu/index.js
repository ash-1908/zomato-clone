import Express from "express";

import {MenuModel, ImageModel} from "../../Database/allModels";

const Router = Express.Router();

import {ValidateRestaurantId} from "../../Validation/food";

/* 
Route           /
Description     Get all menu based on particular restaurant
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const {_id} = req.params;
        await ValidateRestaurantId(_id);

        const menus = await MenuModel.find(_id);
        
        return res.json({menus});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

/* 
Route           /image
Description     Get menu image based on restaurant id
Params          _id
Access          Public
Method          GET
*/
Router.get("/image/:_id", async (req, res) => {
    try {
        const {_id} = req.params;
        await ValidateRestaurantId(_id);
        
        const menuImage = await ImageModel.findOne(_id);
        
        return res.json({ menuImage });
        
    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;