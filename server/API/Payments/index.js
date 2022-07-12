import express from 'express';
import passport from 'passport';
import Razorpay from 'razorpay';
import {v4 as uuid} from "uuid";

const Router = express.Router();

/*
Route: /new
Des:   Create order for payment
Params: none
Access: Private
Method: POST
*/
Router.post('/new', async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.RAZERPAY_ID,
			key_secret: process.env.RAZERPAY_SECRET,
		});

    const options = {
			amount: req.body.amount * 100,
			currency: 'INR',
			receipt: `order_receipt${uuid()}`,
		};

		const order = await instance.orders.create(options);

    return res.json({order});

	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

export default Router;
