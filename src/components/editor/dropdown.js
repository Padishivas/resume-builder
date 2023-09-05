import React from 'react'

export default function Dropdown({children,open,setOpen}) {
  return (
    <div className={`dropdown-container ${open ? "dropdown-open" :"dropdown-close"}`}>
        {children}
    </div>
  )
}
