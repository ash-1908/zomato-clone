import React from 'react'

const ImageCollection = (props) => {
  return (
    <div className='w-42 h-42 md:w-48 md:h-48 flex flex-col gap-1'>
     <div className='w-full h-full overflow-hidden'>
         <img src={props.url} alt={props.alt} className="w-full h-full transform transition duration-700 hover:scale-110 rounded-md" />
     </div>
     <p className='text-sm'>{props.title}</p>
     <p className='text-sm'>{props.pages} Pages</p>
    </div>
  )
}

export default ImageCollection