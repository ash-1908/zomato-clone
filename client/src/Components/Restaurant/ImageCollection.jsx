import React, {useState} from 'react'
import ImageViewer from "react-simple-image-viewer"

const ImageCollection = (props) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsViewerOpen(false);
  const openViewer = () => setIsViewerOpen(true);
  
  return (
    <>
      {isViewerOpen && (
        <ImageViewer
          src={ props.images }
          currentIndex={ currentImage }
          disableScroll={ true }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
      <div className='w-42 h-42 md:w-48 md:h-48 flex flex-col gap-1' onClick={openViewer}>
        <div className='w-full h-full overflow-hidden'>
          <img src={props.images[0]} alt={props.alt} className="w-full h-full transform transition duration-700 hover:scale-110 rounded-md" />
        </div>
        <p className='text-sm'>{props.title}</p>
        <p className='text-sm'>{props.pages} Pages</p>
      </div>
    </>
  )
}

export default ImageCollection