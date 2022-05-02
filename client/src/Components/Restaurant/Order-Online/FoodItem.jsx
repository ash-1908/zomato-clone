import React from 'react'
import ReactStars from 'react-rating-stars-component'

//icons
import {AiOutlinePlus} from "react-icons/ai"

const FoodItem = (props) => {
    return (
        <>
            <div className='flex items-start gap-2'>
                <div className='w-1/3 h-24 md:h-28 lg:h-36 md:px-3'>
                    <img
                        src={props.image}
                        alt={props.title}
                        className='w-full h-full rounded-lg object-cover' />
                </div>
                <div className='flex flex-col md:gap-1 w-3/4 md:w-7/12'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-md md:text-lg font-medium'>{props.title}</h3>
                        <button className='md:hidden border border-zred-400 rounded-md bg-zred-50 px-2 md:px-3 py-1 text-zred-400 hover:text-white hover:bg-zred-400 text-sm'><span className='flex items-center gap-1'><AiOutlinePlus /> Add</span></button>
                    </div>
                    <ReactStars count={5} value={props.rating} />
                    <small className='font-base'>₹{props.price}</small>
                    <p className='truncate text-sm text-gray-500'>{props.desc}</p>
                </div>
                <div className='hidden md:block w-2/12'>
                    <button className='border border-zred-400 rounded-md px-2 md:px-3 py-1 bg-zred-50 text-zred-400 hover:text-white hover:bg-zred-400'><span className='flex items-center gap-1'><AiOutlinePlus /> Add</span></button>
                </div>
            </div>

        </>
    )
}

export default FoodItem