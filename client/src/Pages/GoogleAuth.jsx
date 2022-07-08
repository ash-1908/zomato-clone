import React, {useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux';

import { googleAuth } from '../Redux/Reducer/Auth/Auth.Action';

const GoogleAuth = () => {
  const token = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=> {
    if(token){
        dispatch(googleAuth(token)).then(() => history.push("/delivery"));
    }  console.log(token)
  }, [token])
  return (
    <div>Loading, please wait...</div>
  )
}

export default GoogleAuth