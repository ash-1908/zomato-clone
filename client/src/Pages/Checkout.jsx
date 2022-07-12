import React from 'react'

import FoodItem from '../Components/Cart/FoodItem'
import AddressList from '../Components/Checkout/AddressList'

import {BsShieldLockFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const reduxState = useSelector(
		(global) => global.cart.cart
	);
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
  const options = {
    "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
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
              {reduxState.map((food) => (
									<FoodItem key={food._id} {...food} />
								))}
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