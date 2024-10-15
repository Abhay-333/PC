import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[96vw] mx-auto h-[7vh] flex items-center justify-between'>
        <div className="left-nav text-sm">
            Logo
        </div>
        
        <div className="right-nav text-xs">
            Menu
        </div>

    </div>
  )
}

export default Navbar