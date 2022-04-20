import React from 'react'
import { IoMdArrowDropright } from "react-icons/io"
const PictureCarousalCard = () => {
    return (
        <>
            <div className='w-full h-64 relative px-5 overflow-hidden'>
                <div className='w-full h-full relative'>
                    <img src="https://b.zmtcdn.com/data/pictures/9/3401239/65840c3566f0e9a6cc7d265834f19cce.jpeg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                        alt="food"
                        className='w-full h-full object-cover transition duration-700 ease-in-out rounded-lg' />
                    <div
                        className='w-full h-full inset-0 absolute rounded-lg'
                        style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)" }}
                    />
                </div>
                <div className='absolute w-full text-white bottom-2 z-10 left-8'>
                    <h4>some special</h4>
                    <h5 className='flex items-center'>15 places <IoMdArrowDropright /></h5>
                </div>

            </div>

        </>
    )
}

export default PictureCarousalCard