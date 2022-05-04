import React from 'react'

import CheckoutNavbar from '../Components/Checkout/Navbar'

const CheckoutLayout = (props) => {
  return (
    <>
      <div className='container mx-auto px-5 xl:px-40'>
        <CheckoutNavbar />
      </div>
      <hr className='bg-gray-100 opacity-50 ' />
      <div className='container mx-auto px-5 xl:px-40'>
        {props.children}
      </div>
    </>
  )
}

export default CheckoutLayout