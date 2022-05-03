import React, { useState } from 'react'
import ImageViewer from "react-simple-image-viewer"
const Menu = () => {
  const [menus, setMenus] = useState([]);
  return (
    <div className='flex flex-wrap gap-2'>
      {menus.map((menu) => <ImageViewer {...menu} />)}
    </div>
  )
}

export default Menu