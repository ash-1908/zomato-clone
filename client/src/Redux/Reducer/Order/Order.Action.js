// libraries
import axios from 'axios';

// redux types
import { CREATE_ORDER, ORDER_PLACED } from './Order.Type';

export const createOrder = () => async (dispatch) => {
	try {
		const order = await axios({
			method: 'POST',
			url: `http://localhost:3000/payments/new`,
		});

		return dispatch({
			type: CREATE_ORDER,
			payload: order.data,
		});
	} catch (error) {
		return dispatch({
			type: 'ERROR',
			payload: error.message,
		});
	}
};

export const googleAuth = () => async (dispatch) => {
	try {
		return dispatch({ type: ORDER_PLACED, payload: {} });
	} catch (error) {
		return dispatch({
			type: 'ERROR',
			payload: error.message,
		});
	}
};
