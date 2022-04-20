import React from 'react'
import { useParams } from 'react-router-dom'
//components
import Delivery from '../Delivery'
import Dining from '../Dining'

const Master = () => {
  const {tab} = useParams();
  return (
    <>
      {tab === "delivery" && <Delivery/>}
      {tab === "dine" && <Dining/>}
    </>
  )
}

export default Master
