import React from 'react';

import { MdLocationOn } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";

const HeroContainer = () => {
	return (
		<div className='relative flex flex-col items-center justify-center py-10 w-full'>
			<div className='w-72'>
				<img
					src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'
					alt='zomato image'
          className='w-full h-full'
				/>
			</div>
      <div className='flex flex-col py-2 gap-10'>
        <h3 className='text-white text-5xl'>Discover the best food and drinks</h3>
        <div className="flex border rounded-lg shadow-lg border-gray-200 py-3 bg-white">
					<div className="w-4/6 flex items-center border-r-2 border-gray-300">
						<span className="text-zred-300 px-2 text-2xl">
							<MdLocationOn />
						</span>
						<input
							type="text"
							placeholder="location"
							className="w-full focus:outline-none"
						/>
						<span className="mx-2">
							<HiChevronDown />
						</span>
					</div>
					<div className="w-full flex items-center px-3">
						<span className="text-gray-400 mr-2 text-2xl">
							<BiSearchAlt />
						</span>
						<input
							type="text"
							placeholder="search"
							className="w-full focus:outline-none"
						/>
					</div>
				</div>
      </div>
		</div>
	);
};

export default HeroContainer;
