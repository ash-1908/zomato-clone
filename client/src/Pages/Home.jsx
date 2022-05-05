import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
//components
import Delivery from '../Components/Delivery'
import Dining from '../Components/Dining'
import Nightlife from '../Components/Night-Life'

//redux actions
import { getRestaurant } from '../Redux/Reducer/Restaurant/Restaurant.action'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant("Varanasi"));
  }, []);

  const {tab} = useParams();
  
  return (
    <>
      {tab === "delivery" && <Delivery/>}
      {tab === "dine" && <Dining/>}
      {tab === "nightlife" && <Nightlife/>}
    </>
  )
}

export default Home
