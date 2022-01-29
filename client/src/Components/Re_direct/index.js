import React from 'react'
import {useHistory } from 'react-router-dom'

const Re_direct = () => {
  const history = useHistory();
  return <>{history.push("/delivery")}</>
}

export default Re_direct
