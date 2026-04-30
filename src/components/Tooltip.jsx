import React, { useState } from 'react'

export default function Tooltip({text,children}) {
  const [showTooltip,setShowTooltip]=useState(false);
  return (
    <div 
      onMouseEnter={()=>(setShowTooltip(true))}
      onMouseLeave={()=>(setShowTooltip(false))}
    >
      
        {children}
        {showTooltip && <div className='tooltiptext'>{text}</div>}
    </div>
  )
}
