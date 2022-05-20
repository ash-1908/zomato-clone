import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"

//components
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer'
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton'
import FoodList from '../../Components/Restaurant/Order-Online/FoodList'

//icons
import { AiOutlineCompass } from 'react-icons/ai'
import { AiOutlineFieldTime } from 'react-icons/ai'

//redux actions
import {getFood, getFoodList} from "../../Redux/Reducer/Food/Food.Action"

const OrderOnline = () => {
  const [menu, setMenu] = useState([]);
  const [selected, setSelected] = useState("");

  const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant);
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    reduxState && dispatch(getFoodList(reduxState.menu)).then((data) => setMenu(data.payload.menus.menus));
  },[reduxState])
  
  const onClickHandler = (e) => {
    if (e.target.id)
        setSelected(e.target.id);
    return;
};

  return (
    <>
      <div className='w-full flex items-start gap-5 h-screen'>
        <aside 
        className='hidden md:flex flex-col gap-1 w-1/4 border-r border-gray-200 h-screen overflow-y-scroll'>
          {
            menu.map((item) => (
              <MenuListContainer 
              {...item} 
              key={item._id} 
              onClickHandler={onClickHandler} 
              selected={selected} />
            ))
          }
        </aside>
        <div className='w-full md:w-3/4'>
          <h2 className='text-xl font-semibold'>Order Online</h2>
          <h4 className='text-xs text-gray-500'>
            <span className='flex items-center'>
              <span className='border-r border-gray-300 py-1 flex items-center gap-1 pr-2'>
                <AiOutlineCompass />Live track your order
              </span>
              <span className='pl-2 py-1 flex items-center gap-1'>
                <AiOutlineFieldTime />45 min
              </span>
            </span>
          </h4>
          <section className='my-5 flex flex-col gap-5 h-screen overflow-y-scroll'>
             <div>
              {menu.map((item) => (
                <FoodList key={item._id} {...item} />
              ))}
             </div>
          </section>
        </div>
      </div>
      <FloatMenuButton />
    </>
  )
}

export default OrderOnline