import React, { useState } from 'react'

//icons
import { FcMenu } from "react-icons/fc"
import {IoIosCloseCircleOutline} from "react-icons/io"

//components
import MenuListContainer from './MenuListContainer'

const FloatMenuButton = () => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleMenu = () => setIsClicked((prev) => !prev);

    return (
        <>
        <div className='fixed bottom-2 right-2 flex flex-col items-end gap-2 z-30 w-8/12 md:hidden'>
            {isClicked && (<div className='bg-white overflow-y-scroll h-48 z-10 shadow-md border-t border-zred-400'>
                <MenuListContainer />
            </div>)}
            <button className='text-white bg-zred-400 rounded-full px-3 py-1' onClick={toggleMenu}>
                <span className='flex items-center gap-1'> {isClicked ? <IoIosCloseCircleOutline /> : <FcMenu />} Menu </span>
            </button>
        </div>
        </> 
    )
}

export default FloatMenuButton