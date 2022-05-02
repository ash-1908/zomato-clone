import React from 'react'

//components
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer'
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton'
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem'

//icons
import { AiOutlineCompass } from 'react-icons/ai'
import { AiOutlineFieldTime } from 'react-icons/ai'

const OrderOnline = () => {
  return (
    <>
      <div className='w-full flex items-start gap-5'>
        <aside className='hidden md:flex flex-col gap-1 w-1/4 border-r border-gray-200 h-screen overflow-y-scroll'>
          <MenuListContainer />
          <MenuListContainer />
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
          <section className='my-5 flex flex-col gap-2 '>
            <FoodItem 
            image='https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png?fit=around|130:130&crop=130:130;*,*' 
            title='Farmhouse Pizza' 
            price='269' 
            rating='4' 
            desc='Delightful combination of onion, capsicum, tomato & grilled mushroofadfasfasfmafsasfa asfasfds' />
            
          </section>
        </div>
      </div>
      <FloatMenuButton />
    </>
  )
}

export default OrderOnline