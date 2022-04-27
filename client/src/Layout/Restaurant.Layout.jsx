import React from 'react'

//components
import RestaurantNavbar from '../Components/Restaurant/Navbar'
import ImageGrid from '../Components/Restaurant/ImageGrid'
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo'



const RestaurantLayout = () => {
	return (
		<>
			<header className="container mx-auto xl:px-40 lg:border-b lg:border-gray-100">
				<RestaurantNavbar />
			</header>
			<div className="container mx-auto px-5 xl:px-40">
				<ImageGrid images={["https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1"]} />
				
				<RestaurantInfo restaurantName="Rahil Restaurant" restaurantRating="4" deliveryRating="4.5" cuisine="North Indian, Chinease, Thai" address="Rathayatra, Varanasi" />
			</div>
		</>
	)
}

export default RestaurantLayout