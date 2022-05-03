import React from 'react'

const FoodItem = (props) => {

  return (
    <>
      <div className='flex items-center justify-between'>
        <h5>{props.name}</h5>
        <div className='flex flex-col items-end'>
          <small>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
          <div className='flex items-center bg-zred-400 text-white rounded gap-1 px-1'>
            <button className=' p-1'>
              -
            </button>
            <small>39</small>
            <button className='p-1'>
              +
            </button>
          </div>
        </div>
      </div>
      <hr className='my-1'/>
    </>
  )
}

export default FoodItem