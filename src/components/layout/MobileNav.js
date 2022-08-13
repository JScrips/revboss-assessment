import React from 'react'

const MobileNav = ({ showMobile }) => {
  const toggle = showMobile ? 'flex' : 'hidden'
  return (
    <div>
      <ul className={` ${toggle} items-center gap-8 text-white font-semibold lg:hidden`}>
        <li>Features</li>
        <li>Verticals</li>
        <li> Pricing </li>
        <li> Success</li>
        <li> About</li>
        <li> Blog</li>
        <li className="bg-orange-700 py-2 rounded-full px-4"> Login</li>
      </ul>
    </div>
  )
}

export default MobileNav
