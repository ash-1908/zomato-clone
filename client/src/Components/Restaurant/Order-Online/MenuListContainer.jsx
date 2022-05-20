import React, { useState } from 'react'

//components
import MenuCategory from './MenuCategory';

const MenuListContainer = (props) => {

    

    return (
        <div className='w-full'>
            <MenuCategory 
            onClickHandler={props.onClickHandler} 
            name = {props.name}
            items = {props.items}
            isActive={props.selected === props.name} />
        </div>
    )
}

export default MenuListContainer