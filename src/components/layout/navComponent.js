import React from 'react'

const navComponent = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8 text-white font-semibold">
        <li>Features</li>
        <li>Verticals</li>
        <li> Pricing </li>
        <li> Success</li>
        <li> About</li>
        <li> Blog</li>
        <li className="bg-orange-700 py-2 rounded-full px-4"> Login</li>
      </ul>
    </nav>
  )
}

export default navComponent
