import React from 'react';

//icons
import { MdOutlineCameraEnhance } from 'react-icons/md';

const ImageGrid = (props) => {
	return (
		<>
			<div className='w-full h-52 md:hidden'>
				<img src={props.images[0]} alt='Restaurant image' className='w-full h-full' />
			</div>

			<div className='hidden md:flex w-full h-96 justify-center mt-2 cursor-pointer'>
				<div className='w-full h-full mr-1 overflow-hidden'>
					<img
						src={props.images[0]}
						alt='Restaurant image'
						className='w-full h-full rounded-md transform hover:scale-110 transition duration-700'
					/>
				</div>
				<div className='w-1/4 flex flex-col mr-1 overflow-hidden'>
					<img
						src={props.images[1]}
						alt='Restaurant image'
						className='w-full h-full mb-1 rounded-md transform hover:scale-110 transition duration-700'
					/>
					<img
						src={props.images[2]}
						alt='Restaurant image'
						className='w-full h-full rounded-md transform hover:scale-110 transition duration-700'
					/>
				</div>
				<div className='w-1/4 flex flex-col overflow-hidden'>
					<div className='w-full h-full relative mb-1'>
						<img src={props.images[3]} alt='Restaurant image' className='w-full h-full rounded-md' />
						<div className='absolute inset-0 bg-black bg-opacity-50 rounded-md' />
						<h4 className='absolute text-white top-20 left-0 text-center w-full h-full text-lg font-semibold'>
							View Gallery
						</h4>
					</div>
					<div className='w-full h-full relative'>
						<img src={props.images[4]} alt='Restaurant image' className='w-full h-full rounded-md' />
						<div className='absolute inset-0 bg-gray-400 bg-opacity-80 rounded-md' />
						<div className='absolute text-white top-1/3 left-0 text-center w-full h-full text-md items-center flex flex-col'>
							<MdOutlineCameraEnhance className='text-4xl bg-black bg-opacity-50 rounded-2xl p-1' />
							<h4 className='font-bold'>Add Photos</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageGrid;
