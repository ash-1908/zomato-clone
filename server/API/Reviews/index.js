import Express from "express";
import passport from "passport"

const Router = Express.Router();

import {ReviewModel} from "../../Database/allModels";

/* 
Route           /new
Description     Add new review
Params          none
Access          Public
Method          POST
*/
Router.post("/new", passport.authenticate("jwt"),async (req, res) => {
    try {
        const {_id} = req.session.passport.user._doc;
        const {reviewData} = req.body;
        await ReviewModel.create({...reviewData, user: _id });

        return res.json({review: "Successfully created review!"});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});


/* 
Route           /
Description     Get all reviews of a restaurant
Params          Restaurant Id
Access          Public
Method          GET
*/
Router.get("/:resId", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({restaurant: req.params.resId})
        return res.json({reviews});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

/* 
Route           /delete
Description     Delete a review
Params          _id
Access          Public
Method          DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "Successfully deleted review!"});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;