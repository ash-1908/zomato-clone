import React from 'react';

//components
import Carousal from './Carousal';
import RestaurantCard from './RestaurantCard';

const Delivery = () => {
  return (<>
      <Carousal />
      <div className='md:flex md:flex-wrap'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
  </>);
};

export default Delivery;
