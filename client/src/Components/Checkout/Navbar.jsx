import React from 'react';
import { useSelector } from 'react-redux';

//icons
import { FaUserAlt } from 'react-icons/fa';
import { IoMdArrowDropleft } from 'react-icons/io';

const CheckoutNavbar = () => {

	const reduxState = useSelector((globalStore) => globalStore.user.user);
	return (
		<div className='flex items-center w-full relative justify-between py-3'>
			<span className='flex items-center text-zred-400 cursor-pointer'><IoMdArrowDropleft className='text-2xl text-black md:text-zred-400 md:text-xl' /><p className='text-sm hidden md:block'>Back to restaurant</p></span>
			<div className='w-24 px-0.5 md:w-28'>
				<img
					src='https://ops.runnr.in/assets/zomato_logo_black-72e759139bb73d92afb5f8ae0b2485b7cb023a5474859f2b6e22fdd8b83d2fc0.png'
					alt='Logo'
					className='w-full h-full'
				/>
			</div>
			<div className='flex items-center gap-2'>
				<span className='border border-gray-300 text-zred-400 rounded-full p-2 ml-2 flex items-center gap-2'>
					<FaUserAlt />
				</span>
				<h4>reduxState?.user?.fullName</h4>
			</div>
		</div>
	);
};

export default CheckoutNavbar;
