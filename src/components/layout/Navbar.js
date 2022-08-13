import React from 'react'
import NavComponent from './navComponent'
import RevBoss from './RevBoss'
import TitleFiller from './TitleFiller'
import MobileNav from './MobileNav'
import { useState } from 'react'
const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false)
  return (
    <header className=" bg-gradient-to-r from-[#f5861b] to-[#ea400d] pb-80 flex flex-col">
      <nav className="flex flex-col items-center">
        <div className="flex justify-between w-5/12  items-center gap-12 ">
          <div className="flex items-center">
            <RevBoss />
          </div>
          <NavComponent setShowMobile={setShowMobile} />
        </div>
        <MobileNav showMobile={showMobile} />
      </nav>

      <div className="flex mx-auto items-center mt-60 text-center">
        <TitleFiller />
      </div>
    </header>
  )
}

export default Navbar
