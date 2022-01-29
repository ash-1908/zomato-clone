import React from 'react'
import { useParams } from 'react-router-dom'
//components
import Delivery from '../Delivery'

const Master = () => {
  const {tab} = useParams();
  return (
    <>
      {tab === "delivery" && <Delivery/>}
    </>
  )
}

export default Master
