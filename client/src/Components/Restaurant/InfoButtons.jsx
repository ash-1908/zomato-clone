import React from 'react'

const InfoButtons = (props) => {
  return (
    <>
      
            <button className={`flex items-center border rounded-md p-2 border-gray-400 text-sm mr-2 mt-2${props.isActive ? ' bg-zred-400 text-gray-100' : ''}`}>
              {props.children}
            </button>
   
    </>
  )
}

export default InfoButtons