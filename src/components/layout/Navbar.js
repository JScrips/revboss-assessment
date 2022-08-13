import React from 'react'
import NavComponent from './navComponent'
import RevBoss from './RevBoss'
import TitleFiller from './TitleFiller'
const Navbar = () => {
  return (
    <header className=" bg-gradient-to-r from-[#f5861b] to-[#ea400d] pb-80 flex flex-col">
      <nav className="flex justify-center">
        <div className="flex justify-between w-5/12  items-center ">
          <div className="flex items-center">
            <RevBoss />
          </div>
          <NavComponent />
        </div>
      </nav>

      <div className="flex mx-auto items-center mt-60 text-center">
        <TitleFiller />
      </div>
    </header>
  )
}

export default Navbar
