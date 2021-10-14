import Express from "express";
import { OrderModel } from "../../Database/Orders";
import passport from "passport";

const Router = Express.Router();

import {ValidateNewOrder, ValidateUserId} from "../../Validation/orders";

/* 
Route           /
Description     get all orders based on user _id
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        await ValidateUserId(req.params);

        const {_id} = req.params;
        const getOrders = await OrderModel.findOne({user: _id});

        if(!getOrders)
            return res.status(404).json({error: "User not found"});

        return getOrders;

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});

/* 
Route           /new
Description     add new order
Params          _id
Access          Public
Method          POST
*/
Router.post("/new/:_id", async (req, res) => {
    try {
        await ValidateUserId(req.params);
        await ValidateNewOrder(req.body);

        const {_id} = req.params;
        const {newOrder} = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate({user: _id}, {$push:{orderDetails: newOrder}}, {new: true});

         return res.json({order: addNewOrder});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});


export default Router;