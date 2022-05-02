import React from 'react'

//icons
import { AiFillStar } from 'react-icons/ai'

const ReviewCard = () => {
    return (
        <div className='md:px-3 my-7'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <div className='w-10 h-10 rounded-full'>
                            <img src="https://b.zmtcdn.com/data/user_profile_pictures/804/d91a639bcf6bfd5d805601cb24cc1804.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Avatar" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='flex flex-col'>
                            <h6 className='text-md font-bold'>Anmol Sharma</h6>
                            <small className='text-xs text-gray-500'>5 Reviews &#8226; 3 Followes</small>
                        </div>
                    </div>
                    <button className='border border-zred-400 text-zred-400 px-3 py-1 rounded-md'>Follow</button>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2 px-1'>
                        <span className='bg-green-700 flex text-white text-xs px-2 py-0.5 items-center gap-1 rounded-lg '>4<AiFillStar /></span>
                        <h6 className='uppercase text-sm'>Delivery</h6>
                        <small className='text-gray-600'>3 days ago</small>
                    </div>
                    <div className='w-full'>
                        <p className='text-light text-gray-600 text-base w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi, aut ad cumque tempore delectus facere architecto aperiam assumenda illo rem rerum dolorem harum possimus sed, accusamus, ea laudantium veniam.
                            Voluptatem ad earum tenetur cumque, optio rerum labore voluptatum quia nihil odit ipsum maxime maiores fugiat qui officia voluptates. Nostrum ut ea repudiandae nihil, quisquam dolores consequuntur neque accusamus minima!
                            Sapiente debitis dolores nam aperiam vero ducimus at placeat dignissimos quas rem adipisci repellat temporibus animi optio ea error, itaque expedita magnam incidunt ratione possimus modi fugiat repellendus? Optio, quaerat!
                            ratione beatae eaque id molestiae cumque totam, fuga sit eveniet in nam facilis illo qui delectus minima reprehenderit, hic nostrum aspernatur. Facilis voluptates possimus, maxime maiores alias similique.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard