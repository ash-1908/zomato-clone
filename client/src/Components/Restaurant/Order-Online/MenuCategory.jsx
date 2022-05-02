import React from 'react'
import classNames from 'classnames'

const MenuCategory = (props) => {
  return (
    <div className={classNames("p-2",{"text-zred-400 bg-zred-50 border-r-4 border-zred-400" : props.isActive})}
    >
        <h3 onClick={props.onClickHandler} id={props.name}>{props.name} ({props.items.length})</h3>
    </div>
  )
}

export default MenuCategory