import React from 'react'
import classnames from 'classnames'
import {useLocation, Link, useParams} from 'react-router-dom'

const Tab = (props) => {
    const {id} = useParams();
    return (
    <Link to={`${props.path}`}>
        <div className={classnames("font-base text-gray-500 px-1 text-lg md:text-xl", {"border-b-2 border-zred-400 text-zred-400 font-semibold": props.isActive})}>
            {props.title}
        </div>
    </Link>
    )
}

const TabContainer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    
    const tabs = [{
        path: 'overview',
        title: 'Overview',
        isActive: currentPath.includes('overview')
    },
    {
        path: 'order-online',
        title: 'Order Online',
        isActive: currentPath.includes('order-online')
    },
    {
        path: 'reviews',
        title: 'Reviews',
        isActive: currentPath.includes('reviews')
    },
    {
        path: 'menu',
        title: 'Menu',
        isActive: currentPath.includes('menu')
    },
    {
        path: 'photos',
        title: 'Photos',
        isActive: currentPath.includes('photos')
    },
]
    return (
        <>
    <div className='flex items-center gap-10 overflox-x-scroll border-b border-collapse'>
        {tabs.map((tabProps)=>(
            <Tab {...tabProps} key={`ResTab${tabProps.path}`} />
        ))}
    </div>
    </>
  )
}

export default TabContainer