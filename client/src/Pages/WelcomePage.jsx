import React from 'react';

import Navbar from '../Components/WelcomePage/Navbar';
import HeroContainer from '../Components/WelcomePage/HeroContainer';
import About from '../Components/WelcomePage/About';

const WelcomePage = () => {
	return (
		<>
			<div className='relative w-full h-full'>
				<div className='w-full h-96 absolute top-0 -z-10'>
					<img
						src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'
						alt='Background image of food'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='container mx-auto xl:px-40 lg:border-b lg:border-gray-100'>
					<Navbar />
					<HeroContainer />
				</div>
			</div>
			<div className='container mx-auto xl:px-40 py-20 bg-ltbg-100'>
				<div className='w-56 text-xl'>
					<About />
				</div>
			</div>
		</>
	);
};

export default WelcomePage;
