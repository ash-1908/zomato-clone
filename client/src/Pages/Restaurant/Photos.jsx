import React, {useState} from 'react'
import ImageViewer from "react-simple-image-viewer"
import PhotosCollection from '../../Components/Restaurant/PhotosCollection';

const Photos = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/2/18637302/9cc4fc92d52b2b5c1ee9bc9516cd9c30.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/2/18637302/5d18965ae30a38cb92346e14c71b910b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/2/18637302/9977839b3ef2344eb55ec3f8a5df53f3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
  ]);

  const closeViewer = () => setIsViewerOpen(false);
  const openViewer = () => setIsViewerOpen(true);
  
  return (
    <div>
      {isViewerOpen && (
        <ImageViewer
          src={ photos }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
      <div className='flex flex-wrap gap-2'>
      {
        photos.map((photo) => <PhotosCollection image={photo} openViewer={openViewer} /> )
      }
      </div>
    </div>
  )
}

export default Photos