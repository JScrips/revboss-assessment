import React from 'react'

const Footer = () => {
  return (
    <div className="p-8 border-t  flex justify-center gap-4 text-orange-600 tracking-wide font-normal bg-zinc-50">
      <span>&copy; 2022</span>
      <ul className="flex gap-8">
        <li> Privacy Policy </li>
        <li> Terms </li>
        <li> About </li>
        <li> Sitemap </li>
      </ul>
    </div>
  )
}

export default Footer
