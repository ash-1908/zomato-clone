import React from 'react';

//components
import Carousal from './Carousal';

const Delivery = () => {
  return (<>
    <div className='lg:hidden'>
      <Carousal />
    </div>
    <div className='hidden lg:block'>
      <Carousal />
    </div>
  </>);
};

export default Delivery;
