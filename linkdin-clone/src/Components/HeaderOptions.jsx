import React from 'react'
import "./HeaderOptions.css"

function HeaderOptions({Icon,title}) {
  return (
    <div className='headerOption'>
{Icon && <Icon className="headerOptions-icon" />}
<h3 className='headerOption-title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions