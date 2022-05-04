import React from 'react'

import FoodItem from '../Components/Cart/FoodItem'
import AddressList from '../Components/Checkout/AddressList'

import {BsShieldLockFill} from 'react-icons/bs'

const Checkout = () => {
  const address = [
    {
      name: "Home",
      address: "Rathyatra, Varanasi, India"
    },
    {
      name: "Work",
      address: "Dehradun, Uttrakhand, India"
    },
    {
      name: "Gym",
      address: "Sigra, Varanasi, India"
    }
  ]
  return (
    <div className='py-8'>
      <div className='flex flex-col gap-3 items-center'>
          <h1 className='text-2xl font-semibold text-center'>Checkout</h1>
          <div className='flex flex-col items-center bg-white w-full md:w-3/5 rounded-lg shadow-lg'>
            <h3 className='text-lg font-semibold'>Summary</h3>
            <div className='flex flex-col items-center gap-2 w-full'>
              <h5 className='text-base tracking-wider'>ORDER FROM</h5>
              <div className='flex flex-col items-center text-gray-400 w-full'>
                <h4>Domino's Pizza</h4>
                <small>Rathyatra, Varanasi</small>
              </div>
              <div className='my-4 w-full md:w-3/5 flex flex-col px-4'>
                <FoodItem name={'Pizza'} quantity={4} price={40} />
                <FoodItem name={'Pizza'} quantity={4} price={40} />
                <FoodItem name={'Pizza'} quantity={4} price={40} />
              </div>
              <div className='my-8 w-full md:w-3/5 flex flex-col gap-2'>
                <h4 className='text-lg font-medium text-center'>
                  Choose Address
                </h4>
                <AddressList address={address} />
              </div>
            </div>
            
            <button 
            className='my-4 md:my-8 w-full flex items-center justify-center gap-2 md:w-4/5 h-14 text-white bg-zred-400 rounded-lg font-medium text-lg'>
              Pay Securely
              <BsShieldLockFill />
              </button>
            
          </div>
      </div>
    </div>
  )
}

export default Checkout