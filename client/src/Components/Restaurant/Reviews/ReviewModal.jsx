import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rating from "react-rating-stars-component"
//redux action
import { postReview } from '../../../Redux/Reducer/Reviews/Reviews.action';

export default function ReviewModal({ setIsOpen, isOpen, ...props }) {
    const dispatch = useDispatch();
     
    const [reviewData, setReviewData] = useState({
        subject: "",
        reviewData: "",
        isRestaurantReview: false,
        isFoodReview: false,
        rating: 0
    });

    const {id} = useParams();
    

    const toggleDining = () => setReviewData(prev => ({
        ...prev, 
        isRestaurantReview: !reviewData.isRestaurantReview,
        isFoodReview: false
    }))
    
    const toggleDelivery = () => setReviewData(prev => ({
        ...prev, 
        isFoodReview: !reviewData.isFoodReview,
        isRestaurantReview: false
    }))
    
    const handleRating = (rating) => setReviewData(prev => ({...prev, rating})) 

    function closeModal() {
        setIsOpen(false)
    }

    const submit = () => {
        dispatch(postReview({
            ...reviewData,
            restaurant: id
        }));
        setReviewData({
            subject: "",
        reviewData: "",
        isRestaurantReview: false,
        isFoodReview: false,
        rating: 0
        })
}

    const handleChange = (e) => setReviewData(prev => ({...prev, [e.target.name]: [e.target.value]}))
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium leading-6 text-gray-900"
                                    >
                                        Add review
                                    </Dialog.Title>
                                    <div className="mt-5">
                                        <div className=''>
                                            <div className='flex items-center gap-4 text-md p-0 m-0'>
                                                <div className='flex flex-row-reverse items-center gap-2'>
                                                    <label htmlFor="dining">Dining</label>
                                                    <input 
                                                    onChange={toggleDining} 
                                                    type="radio" checked={reviewData.isRestaurantReview} name='review' id='dining' className='w-4 h-4' />
                                                </div>
                                                <div className='flex flex-row-reverse items-center gap-2'>
                                                    <label htmlFor="delivery">Delivery</label>
                                                    <input checked={reviewData.isFoodReview} onChange={toggleDelivery} type="radio" name='review' id='delivery' className='w-4 h-4' />
                                                </div>
                                            </div>
                                            <div classNames=''>
                                                <Rating count={5} value={reviewData.rating} onChange={handleRating} size={26} classNames='p-0 m-0' />
                                            </div>
                                            <form action="" className='flex flex-col mt-7 gap-2'>
                                                <div className='w-full flex flex-col gap-2'>
                                                    <label htmlFor="subject">Subject</label>
                                                    <input type="text" 
                                                    id='subject' 
                                                    value={reviewData.subject}
                                                    onChange={handleChange}
                                                    placeholder='amazing food'
                                                    className='w-full border border-gray-400 px-3 py-2 focus:outline-none rounded-lg focus:border-zred-400'/>
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <label htmlFor="reviewText">Review text</label>
                                                    <textarea 
                                                    value={reviewData.reviewData}
                                                    onChange={handleChange}
                                                    id='reviewText' placeholder='amazing food'
                                                    className='w-full border border-gray-400 px-3 py-2 focus:outline-none rounded-lg focus:border-zred-400' rows="5"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="mt-4" onClick={closeModal}>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={submit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
