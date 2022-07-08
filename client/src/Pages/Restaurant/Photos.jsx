import React, {useState, useEffect} from 'react'

import PhotosCollection from '../../Components/Restaurant/PhotosCollection';

import { useSelector, useDispatch } from "react-redux"

import { getImage } from "../../Redux/Reducer/Image/Image.Action"

import ImageViewer from "react-simple-image-viewer"

const Photos = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [photos, setPhotos] = useState([]);

  const closeViewer = () => setIsViewerOpen(false);
  const openViewer = () => setIsViewerOpen(true);
  
  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => {
		return globalStore.restaurant.selectedRestaurant.restaurant;
	});

  useEffect(() => {
		if (reduxState) {
			dispatch(getImage(reduxState?.photos)).then((data) => {
				const images = [];
				console.log(data)
				data.payload.image.images.map(({ location }) => images.push(location));
				setPhotos(images);
			});
		}
	}, [])

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