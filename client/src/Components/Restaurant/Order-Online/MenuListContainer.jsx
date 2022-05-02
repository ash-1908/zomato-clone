import React, { useState } from 'react'

//components
import MenuCategory from './MenuCategory';

const MenuListContainer = () => {
    const [selected, setSelected] = useState("");

    const onClickHandler = (e) => {
        if (e.target.id)
            setSelected(e.target.id);
        return;
    };

    return (
        <div className='w-full'>
            <MenuCategory onClickHandler={onClickHandler} name="Recommended" items={["", ""]} isActive={selected === "Recommended"} />
        </div>
    )
}

export default MenuListContainer