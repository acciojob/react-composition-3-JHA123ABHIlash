import React, { useState } from 'react'

export default function Tooltip({text,children}) {
  const [showTooltip,setShowTooltip]=useState(false);
  return (
    <div className='tooltiptext '
      onMouseEnter={()=>(setShowTooltip(true))}
      onMouseLeave={()=>(setShowTooltip(false))}
    >
      
        {children}
        {showTooltip && <span>{text}</span>}
    </div>
  )
}
