import React, {useState} from 'react';
import { useSelector } from "react-redux";

//icons
import { FaUserAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { HiChevronDown } from 'react-icons/hi';
import { BiSearchAlt, BiArrowBack } from 'react-icons/bi';

import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp"

const MobileNav = ({signIn, signUp}) => {
	const [isDropdownOpen, setIsDropDownOpen] = useState(false);
	const reduxState = useSelector((globalStore) => globalStore.user.user)
	
	return (
		<div className='flex items-center w-full relative'>
			<BiArrowBack className='mr-2' />
			<div className='flex justify-between items-center w-full'>
				<div className='w-24 px-0.5 md:w-28'>
					<img
						src='https://ops.runnr.in/assets/zomato_logo_black-72e759139bb73d92afb5f8ae0b2485b7cb023a5474859f2b6e22fdd8b83d2fc0.png'
						alt='Logo'
						className='w-full h-full'
					/>
				</div>
				<div className='flex items-center'>
					<button className='bg-zred-400 text-white text-sm px-3 py-2 rounded-full'>Use App</button>
					{
					reduxState?.user?.fullName ? (
						<>
							<span
								className="border cursor-pointer border-gray-300 text-zred-400 rounded-full p-2 ml-2 relative h-8 w-8"
								onClick={() => setIsDropDownOpen((prev) => !prev)}>
								<FaUserAlt />
							</span>
							{
								isDropdownOpen && (
									<div className="absolute w-24 shadow-lg text-center flex flex-col items-start right-0 top-10 z-10 bg-white rounded-lg border border-gray-400">
										<button className="w-full hover:bg-zred-50 py-2">Sign out</button>
									</div>
								)
							}
						</>
					) : (
						<>
							<span
								className="border cursor-pointer border-gray-300 text-zred-400 rounded-full p-2 ml-2 relative h-8 w-8"
								onClick={() => setIsDropDownOpen((prev) => !prev)}>
								<FaUserAlt />
							</span>
							{
								isDropdownOpen && (
									<div className="absolute w-24 shadow-lg text-center flex flex-col items-start right-0 top-10 z-10 bg-white rounded-lg border border-gray-400">
										<button className="w-full hover:bg-zred-50 py-2" onClick={signIn}>Sign In</button>
										<hr className="w-full " />
										<button className="w-full hover:bg-zred-50 py-2" onClick={signUp}>Sign Up</button>
									</div>
								)
							}
						</>
					)
				}
				</div>
			</div>
		</div>
	);
};

const LgNav = ({signIn, signUp}) => {
	const [isDropdownOpen, setIsDropDownOpen] = useState(false);
	const reduxState = useSelector((globalStore) => globalStore.user.user);
	return (
		<div className='w-full flex items-center justify-between py-3'>
			<div className='w-3/4 flex items-center'>
				<div className='w-32 mr-5'>
					<img
						src='https://ops.runnr.in/assets/zomato_logo_black-72e759139bb73d92afb5f8ae0b2485b7cb023a5474859f2b6e22fdd8b83d2fc0.png'
						alt='Logo'
						className='w-full h-full'
					/>
				</div>
				<div className='w-5/6 flex border rounded-lg shadow-lg border-gray-200 py-3'>
					<div className='w-4/6 flex items-center border-r-2 border-gray-300'>
						<span className='text-zred-300 px-2 text-2xl'>
							<MdLocationOn />
						</span>
						<input type='text' placeholder='location' className='w-full focus:outline-none' />
						<span className='mx-2'>
							<HiChevronDown />
						</span>
					</div>
					<div className='w-full flex items-center px-3'>
						<span className='text-gray-400 mr-2 text-2xl'>
							<BiSearchAlt />
						</span>
						<input type='text' placeholder='search' className='w-full focus:outline-none' />
					</div>
				</div>
			</div>
			{
				reduxState?.user?.fullName ? (<>
					<div className="flex items-center justify-end w-1/4">
						<span
							className="border cursor-pointer border-gray-300 text-zred-400 rounded-full p-2 ml-2 relative h-8 w-8"
							onClick={() => setIsDropDownOpen((prev) => !prev)}>
							<FaUserAlt />
						</span>
						{
							isDropdownOpen && (
								<div className="absolute w-24 shadow-lg text-center flex flex-col items-start right-0 top-10 z-10 bg-white rounded-lg border border-gray-400">
									<button className="w-full hover:bg-zred-50 py-2">Sign out</button>
								</div>
							)
						}
						<button className="text-lg text-gray-400 hover:text-gray-600 cursor:pointer ml-4" onClick={signUp}>
							Sign out
						</button>
					</div>
				</>) : (<>
					<div className="flex items-center justify-end w-1/4">
						<button className="text-lg text-gray-400 hover:text-gray-600 cursor:pointer mr-4" onClick={signIn}>
							Log In
						</button>
						<button className="text-lg text-gray-400 hover:text-gray-600 cursor:pointer ml-4" onClick={signUp}>
							Sign Up
						</button>
					</div>
				</>)
			}	
		</div>
	);
};

const RestaurantNavbar = () => {
	const [isOpenSignIn, setisOpenSignIn] = useState(false);
	const [isOpenSignUp, setisOpenSignUp] = useState(false);

	const openSignIn = () => setisOpenSignIn(true);
	const openSignUp = () => setisOpenSignUp(true);
	return (
		<>
			<SignIn isOpen={isOpenSignIn} setIsOpen={setisOpenSignIn} />
			<SignUp isOpen={isOpenSignUp} setIsOpen={setisOpenSignUp} />
			<nav className=''>
				<div className='p-4 bg-white shadow-md lg:hidden'>
					<MobileNav signIn={openSignIn} signUp={openSignUp} />
				</div>
				<div className='hidden lg:block'>
					<LgNav  signIn={openSignIn} signUp={openSignUp} />
				</div>
			</nav>
		</>
	);
};

export default RestaurantNavbar;
