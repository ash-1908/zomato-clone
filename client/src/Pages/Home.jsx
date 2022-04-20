import React from 'react'
import { useParams } from 'react-router-dom'
//components
import Delivery from '../Components/Delivery'
import Dining from '../Components/Dining'
import Nightlife from '../Components/Night-Life'

const Home = () => {
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
