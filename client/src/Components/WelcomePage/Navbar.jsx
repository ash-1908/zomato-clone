import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className='relative flex text-white justify-between items-center text-lg py-5'>
				<button className='hover:bg-gray-400 hover:bg-opacity-40 p-2 rounded-md'>
					Get the App
				</button>
				<span className='flex gap-14'>
					<Link to={'/add/restaurant'}>
						<button className='hover:bg-gray-400 hover:bg-opacity-40 p-2 rounded-md'>
							Add restaurant
						</button>
					</Link>
					<Link to={'/delivery'}>
						<button className='hover:bg-gray-400 hover:bg-opacity-40 p-2 rounded-md'>
							Order Now
						</button>
					</Link>
				</span>
			</div>
		</>
	);
};

export default Navbar;
