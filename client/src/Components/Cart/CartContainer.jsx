import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'

import {
	IoMdArrowDropup,
	IoMdArrowDropright,
} from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

import FoodItem from './FoodItem';


const CartSm = ({ toggle }) => {
	const reduxState = useSelector(
		(global) => global.cart.cart
	);

  const history = useHistory();

  const continueToCheckout = () => history.push('/order/checkout');

	return (
		<div className='md:hidden flex items-center justify-between '>
			<div className='flex flex-col items-start'>
				<small
					className='flex items-center gap-1 cursor-pointer'
					onClick={toggle}>
					{reduxState.length} Item <IoMdArrowDropup />
				</small>
				<span>
					<h4 className='flex items-center gap-1'>
						₹
						{reduxState.reduce(
							(acc, curVal) => acc + curVal.totalPrice,
							0
						)}{' '}
						<sub>(plus tax)</sub>
					</h4>
				</span>
			</div>
			<button
				onClick={continueToCheckout}
				className='flex items-center gap-1 bg-zred-400 px-3 py-1 rounded-lg text-white'>
				Continue <IoMdArrowDropright />
			</button>
		</div>
	);
};
const CartLg = ({ toggle }) => {
	const reduxState = useSelector(
		(global) => global.cart.cart
	);

  const history = useHistory();

  const continueToCheckout = () => history.push('/order/checkout');

	return (
		<div className='hidden md:flex items-center justify-between container mx-auto'>
			<div
				className='flex items-start gap-2 text-lg cursor-pointer'
				onClick={toggle}>
				<span className='border rounded p-1 border-gray-300'>
					<IoMdArrowDropup />
				</span>
				<h4 className=''>
					Your orders ({reduxState.length})
				</h4>
			</div>
			<div className='flex items-center gap-2'>
				<h4 className='text-lg'>
					Subtotal: ₹
					{reduxState.reduce(
						(acc, curVal) => acc + curVal.totalPrice,
						0
					)}
				</h4>
				<button
					onClick={continueToCheckout}
					className='flex items-center text-lg font-light h-10 gap-1 bg-zred-400 px-3 py-1 rounded-lg text-white'>
					Continue <IoMdArrowDropright />
				</button>
			</div>
		</div>
	);
};

const CartContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [cartData, setCartData] = useState([]);

	const dispatch = useDispatch();
	const reduxState = useSelector(
		(global) => global.cart.cart
	);

	const toggleCart = () => setIsOpen((prev) => !prev);
	const closeCart = () => setIsOpen(false);

	return (
		<>
			{reduxState.length && (
				<>
					{isOpen && (
						<div className='fixed bottom-16 left-0 right-0 container mx-auto px-5 xl:px-40 py-3 bg-white z-10 p-2'>
							<div className='flex items-center justify-between'>
								<h3 className='top-0 text-lg font-medium md:px-20'>
									Your Orders
								</h3>
								<IoCloseSharp
									onClick={closeCart}
									className='cursor-pointer'
								/>
							</div>
							<hr className='my-2' />
							<div className='flex flex-col gap-2 overflow-y-scroll h-44 md:px-20'>
								{reduxState.map((food) => (
									<FoodItem key={food._id} {...food} />
								))}
							</div>
						</div>
					)}
					<div className='container mx-auto fixed bottom-0 left-0 right-0 py-3 px-5 xl:px-40 w-full bg-white z-10'>
						<CartSm toggle={toggleCart} />
						<CartLg toggle={toggleCart} />
					</div>
				</>
			)}
		</>
	);
};

export default CartContainer;
