import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

//components
import ReviewCard from "../../Components/Restaurant/Reviews/ReviewCard"
import AddReviewCard from '../../Components/Restaurant/Reviews/AddReviewCard';

//redux actions
import { getReviews } from '../../Redux/Reducer/Reviews/Reviews.action';
import { getImage } from '../../Redux/Reducer/Image/Image.Action';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [menuImages, setMenuImages] = useState([]);
    
    const reduxState = useSelector((globalStore) => {
		return globalStore.restaurant.selectedRestaurant.restaurant;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		if (reduxState) {
			dispatch(getImage(reduxState?.menuImages)).then((data) => {
				const images = [];
				console.log(data)
				data.payload.image.images.map(({ location }) => images.push(location));
				setMenuImages(images);
			});

			dispatch(getReviews(reduxState?._id)).then((data) => setReviews(data.payload.reviews));
		}
	}, []);
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