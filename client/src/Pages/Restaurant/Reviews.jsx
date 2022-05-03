import React, { useState } from 'react'

//components
import ReviewCard from "../../Components/Restaurant/Reviews/ReviewCard"
import AddReviewCard from '../../Components/Restaurant/Reviews/AddReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState(["", "", ""]);

    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:hidden'>
                <AddReviewCard />
            </div>
            <div className='w-full md:w-8/12'>
                {reviews.map((review) => <ReviewCard {...review} />)}
            </div>
            <aside
                style={{ height: 'fit-content' }}
                className='hidden md:block md:w-4/12 sticky shadow-xl p-3 rounded-xl'>
                <AddReviewCard />
            </aside>
        </div>
    )
}

export default Reviews