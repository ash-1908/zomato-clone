import React from 'react'

//components
import RestaurantNavbar from '../Components/Restaurant/Navbar'
import ImageGrid from '../Components/Restaurant/ImageGrid'

//icons
import {AiFillStar} from 'react-icons/ai'

const RestaurantLayout = () => {
  return (
	<>
		<header className="container mx-auto xl:px-40 lg:border-b lg:border-gray-100">
			<RestaurantNavbar />
		</header>
		<div className="container mx-auto px-5 xl:px-40">
			<ImageGrid images={["https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1"]} />
			<div>
				<h1 className='text-4xl font-semibold'>
					Rahil Restaurant
				</h1>
				<div>
					<span>3.8 <AiFillStar /> </span>
				</div>
			</div>
		
		</div>
	</>
  )
}

export default RestaurantLayout