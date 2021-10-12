import Express from "express";

const Router = Express.Router();

import {ReviewModel} from "../../Database/allModels";

/* 
Route           /new
Description     Add new review
Params          none
Body            Review object
Access          Public
Method          POST
*/
Router.post("/new", async (req, res) => {
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);

        return res.json({review: "Successfully created review!"});

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
Router.delete("/delete", async (req, res) => {
    try {
        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "Successfully deleted review!"});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

export default Router;