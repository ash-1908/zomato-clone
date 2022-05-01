import React from 'react'

//icons
import {AiFillStar} from 'react-icons/ai'

const SimilarRestaurantCard = (props) => {
    return (
        <div className='mx-3'>
          <div className='w-full h-56'>
            <img src={props.image} alt={props.title}
            className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='flex flex-col gap-2 mt-2 text-left'>
              <h3 className='text-lg md:text-xl'>{props.title}</h3>
                <div className='flex items-baseline gap-2 text-xs text-gray-500'>
                    <span className='flex gap-2 border-r border-gray-400 pr-2'>
                        <span className='flex items-center gap-1 rounded-md bg-green-500 font-bold px-1 text-white text-xs'>3.0<AiFillStar className=''/></span>
                        DINING
                    </span>
                    <span className='flex gap-2'>
                        <span className='flex items-center gap-1 rounded-md bg-green-500 font-bold px-1 text-white text-xs'>3.0<AiFillStar className=''/></span>
                        DELIVERY
                    </span>
                </div>
                <div className='text-xs'>
                    Street Food, Chinease, Indian
                </div>
                <div className='text-xs text-gray-500'>
                    Rathyatra, Varanasi
                </div>
          </div>
        </div>
        );
}

export default SimilarRestaurantCard