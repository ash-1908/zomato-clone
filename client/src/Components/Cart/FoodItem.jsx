import React from 'react'
import { MdDeleteOutline } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { decQnt, deleteCart, incQnt } from '../../Redux/Reducer/Cart/Cart.Action';

const FoodItem = (props) => {
  const dispatch = useDispatch();

  const deleteFoodFromCart = () => dispatch(deleteCart(props._id));
  const increaseQnt = () => dispatch(incQnt(props._id));
  const decreaseQnt = () => {
    if (props.quantity === 1)
      return;
    dispatch(decQnt(props._id))
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <h5>{props.name}</h5>
        <div className='flex flex-col items-end'>
          <small className='text-sm font-medium'>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
          <div className='flex items-center gap-2'>
            <div className='flex items-center bg-zred-400 text-white rounded gap-1 px-1'>
              <button
                className=' p-1'
                onClick={decreaseQnt}>
                -
              </button>
              <small>{props.quantity}</small>
              <button
                className='p-1'
                onClick={increaseQnt}>
                +
              </button>
            </div>
            <span onClick={deleteFoodFromCart}>
              <MdDeleteOutline />
            </span>
          </div>
        </div>
      </div>
      <hr className='my-1' />
    </>
  )
}

export default FoodItem