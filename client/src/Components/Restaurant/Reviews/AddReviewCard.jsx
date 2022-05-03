import React, { useState } from 'react'
import Rating from "react-rating-stars-component"

import ReviewModal from '../../Restaurant/Reviews/ReviewModal';

const AddReviewCard = () => {
    const handleRating = (rating) => console.log(rating);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    return (
        <div className='flex flex-col gap-2 items-start'>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} handleRating={handleRating} />
            <h3 className='text-xl font-base'>Rate your experience for</h3>
            <div className=''>
                <div className='flex items-center gap-4 text-md p-0 m-0'>
                    <div className='flex flex-row-reverse items-center gap-2'>
                        <label htmlFor="dining">Dining</label>
                        <input type="radio" name='review' id='dining' className='w-4 h-4' />
                    </div>
                    <div className='flex flex-row-reverse items-center gap-2'>
                        <label htmlFor="delivery">Delivery</label>
                        <input type="radio" name='review' id='delivery' className='w-4 h-4' />
                    </div>
                </div>
                <div classNames='p-0 m-0'>
                    <Rating count={5} onChange={handleRating} size={26} classNames='p-0 m-0' />
                </div>
            </div>
            <button onClick={openModal} className='text-sm text-zred-400'>
                Write a review
            </button>
        </div>
    )
}

export default AddReviewCard