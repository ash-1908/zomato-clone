import React from 'react'
import FoodItem from './FoodItem'

const FoodList = (props) => {
    return (
        <div>
            <h2 className='sticky top-0 text-xl font-semibold bg-white py-2'>{props.title}</h2>
            <div className='flex flex-col gap-2'>
                {props.items.map((item) => (
                    <FoodItem {...item} />
                ))}
            </div>
        </div>
    )
}

export default FoodList