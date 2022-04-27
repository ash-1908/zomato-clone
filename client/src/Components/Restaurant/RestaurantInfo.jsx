import React from 'react'

//icons
import { AiFillStar } from 'react-icons/ai'

const RestaurantInfo = (props) => {
  return (
    <><div>
    <div className='flex flex-column flex-col-reverse text-xs my-2 md:flex-row md:items-center md:justify-between md:text-base'>
        <h1 className='text-4xl font-semibold'>
           {props.restaurantName}
        </h1>
        <div className='flex items-center'>
        <div className='flex items-center mr-3'>
                <span className='flex items-center bg-green-600 text-white rounded-md p-1 mr-2 font-semibold'>3.8 <AiFillStar className='py-0.5' /></span>
                <span className='text-left'>
                    <b>{props.restaurantRating}</b>
                    <p className='border-b-2 border-dashed'>Dining Reviews</p>
                </span>
            </div>
            <div className='flex items-center mr-3'>
                <span className='flex items-center bg-green-600 text-white rounded-md p-1 mr-2 font-semibold'>3.8 <AiFillStar className='py-0.5' /></span>
                <span className='text-left'>
                    <b>{props.deliveryRating}</b>
                    <p className='border-b-2 border-dashed'>Delivery Reviews</p>
                </span>
            </div>
        </div>
    </div>
    <div className='text-base md:text-md'>
        <h3>{props.cuisine}</h3>
        <h3 className='text-gray-400'>{props.address}</h3>
        <h3><span className='text-yellow-400'>Open Now</span> - 11am - 10pm</h3>
    </div>
</div></>
  )
}

export default RestaurantInfo