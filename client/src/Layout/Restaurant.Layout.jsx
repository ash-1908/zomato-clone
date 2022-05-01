import React from 'react'

//components
import RestaurantNavbar from '../Components/Restaurant/Navbar'
import ImageGrid from '../Components/Restaurant/ImageGrid'
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo'
import InfoButtons from '../Components/Restaurant/InfoButtons'
import TabContainer from '../Components/Restaurant/Tabs'

//icons
import {AiOutlineStar, AiOutlineShareAlt} from "react-icons/ai"
import {RiDirectionLine} from "react-icons/ri"
import {BsBookmarkPlus} from "react-icons/bs"

const RestaurantLayout = (props) => {
	return (
		<>
			<header className="container mx-auto xl:px-40 lg:border-b lg:border-gray-100">
				<RestaurantNavbar />
			</header>
			<div className="container mx-auto px-5 xl:px-40">
				<ImageGrid images={["https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1", "https://th.bing.com/th/id/OIP.ejj0IBWHM_RdyZIzwBN0-QHaEz?pid=ImgDet&rs=1"]} />
				
				<RestaurantInfo restaurantName="Rahil Restaurant" restaurantRating="4" deliveryRating="4.5" cuisine="North Indian, Chinease, Thai" address="Rathayatra, Varanasi" />

				<div className='flex flex-wrap'>
				<InfoButtons isActive><AiOutlineStar className='mr-1' />Add Review</InfoButtons>
				<InfoButtons ><RiDirectionLine className='mr-1' />Direction</InfoButtons>
				<InfoButtons ><BsBookmarkPlus className='mr-1' />Bookmark</InfoButtons>
				<InfoButtons ><AiOutlineShareAlt className='mr-1' />Share</InfoButtons>
				</div>
				<div className='my-3'>
					<TabContainer />
				</div>
				{props.children}
			</div>
		</>
	)
}

export default RestaurantLayout