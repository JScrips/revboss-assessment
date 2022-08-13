import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
const navComponent = ({ setShowMobile }) => {
  return (
    <nav className="">
      <ul className="lg:flex items-center gap-8 text-white font-semibold hidden">
        <li>Features</li>
        <li>Verticals</li>
        <li> Pricing </li>
        <li> Success</li>
        <li> About</li>
        <li> Blog</li>
        <li className="bg-orange-700 py-2 rounded-full px-4"> Login</li>
      </ul>

      <div className="text-5xl text-white ml-20 lg:hidden">
        <GiHamburgerMenu
          className="hover:cursor-pointer"
          onClick={() => setShowMobile(prev => !prev)}
        />
      </div>
    </nav>
  )
}

export default navComponent
