import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

//redux actions 
import { getImage } from "../../Redux/Reducer/Image/Image.Action"

import ImageCollection from '../../Components/Restaurant/ImageCollection'

const Menu = () => {
  const [menus, setMenus] = useState([]);
	
	const dispatch = useDispatch();
	
  const reduxState = useSelector((globalStore) => {
		return globalStore.restaurant.selectedRestaurant.restaurant;
	});

  useEffect(() => {
		if (reduxState) {
			dispatch(getImage(reduxState?.menuImages)).then((data) => {
				const images = [];
				console.log(data)
				data.payload.image.images.map(({ location }) => images.push(location));
				setMenus(images);
			});
		}
	}, [])

  return (
    <div className='flex flex-wrap gap-2'>
      <ImageCollection title="Menu" pages={menus.length} images={menus} />
    </div>
  )
}

export default Menu