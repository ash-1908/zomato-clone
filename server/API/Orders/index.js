import Express from "express";
import { OrderModel } from "../../Database/Orders";

const Router = Express.Router();

/* 
Route           /
Description     get all orders based on _id
Params          _id
Access          Public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try {
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
        const {_id} = req.params;
        const {newOrder} = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate({user: _id}, {$push:{orderDetails: newOrder}}, {new: true});

         return res.json({order: addNewOrder});

    } catch (error) {
        return res.status(201).json({error: error.message});
    }
});


export default Router;