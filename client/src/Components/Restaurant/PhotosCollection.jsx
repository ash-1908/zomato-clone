import React from 'react'

const PhotosCollection = (props) => {
  return (
    <div>
      <div className='w-42 h-42 md:w-48 md:h-48 flex flex-col gap-1' onClick={props.openViewer}>
      <div className='w-full h-full overflow-hidden'>
        <img src={props.image} alt="Food" className="w-full h-full transform transition duration-700 hover:scale-110 rounded-md" />
      </div>

    </div></div>
  )
}

export default PhotosCollection