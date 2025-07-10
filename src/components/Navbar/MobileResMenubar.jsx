import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { navLinks } from './Navbar'
import { IoClose } from "react-icons/io5";

const MobileResMenubar = ({showMenu, toggleMenu}) => {
  return (
    <div className={`fixed top-0 ${showMenu ? "left-0" : "-left-[200%]"} transition-all duration-300 
      z-40 h-screen w-screen ${showMenu ? "bg-black/60" : "bg-transparent"}`}>
      <div className='absolute top-0 left-0 h-[100%] w-[60%] px-6 py-10 sm:px-12 sm:py-16 bg-white'>
        <div>
          {/* Profile Section */}
          <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
              <FaUserCircle className="" size={60}/>
              <div className='flex flex-col gap-1 items-start'>
                <span className='text-xl font-semibold'>Hello User</span>
                <span className='text-base'>Premium User</span>
              </div>
            </div>
            <div>
              <IoClose 
                className='cursor-pointer'
                size={30}
                onClick={toggleMenu}
              />
            </div>
          </div>

          {/* Links Section */}
          <div className='py-16'>
            <ul className='space-y-10'>
              {
                navLinks.map(({id, text}) => (
                  <li key={id} className='text-xl sm:text-2xl font-semibold'>
                    {text}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileResMenubar