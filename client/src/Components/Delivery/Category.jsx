import React from 'react';

const CategorySm = (props) => {
  return (
    <div className='mb-3 md:mb-5'>
      <div className='w-20'>
        <img src={props.image} alt={props.title}
        className='w-full h-full object-cover rounded-full' />
      </div>
      <h3 className='text-center text-sm md:text-xl'>{props.title}</h3>
    </div>
    );
}

const CategoryLg = (props) => {
  return (
    <div className='w-32 mx-10'>
      <div className='w-full'>
        <img src={props.image} alt={props.title}
        className='w-full h-full object-cover rounded-full' />
      </div>
      <h3 className='text-center text-sm md:text-xl'>{props.title}</h3>
    </div>
  )
}

const Category = (props) => {
  return (
  <>
    <div className='md:hidden'>
    <CategorySm {...props}/>  
    </div>
    <div className='hidden md:block'>
      <CategoryLg {...props}/>  
    </div>
  </>
  );
};

export default Category;
