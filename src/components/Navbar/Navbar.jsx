import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router'
import { FaCaretDown} from 'react-icons/fa'
import {HiMenuAlt1, HiMenuAlt3} from 'react-icons/hi';
import MobileResMenubar from './MobileResMenubar'

/* 
  & scrollTo()
  Sometimes, when you navigate to a new route in a single-page application (SPA) like a React app, the scroll position doesn’t reset automatically. So if a user scrolls to the bottom of one page, then clicks "Home", they might land on the home page but still be scrolled down. 😬

  To fix that, we use scrollTo(), so everytime when user visits the new page, it will start from the top

  * for smooth scrolling : window.scrollTo({ top: 0, behavior: 'smooth' });
*/
export const navLinks = [
  {
    id: 1,
    text: (
      <NavLink to="/" onClick={() => window.scrollTo(0, 0)} 
        className={({isActive}) => `${isActive ? "text-secondary" : "text-black"}`}>
          Home
      </NavLink>
    )
  },
  {
    id: 2,
    text: (
      <NavLink to="/blogs" onClick={() => window.scrollTo(0, 0)} 
        className={({isActive}) => `${isActive ? "text-secondary" : "text-black"}`}>
          Blogs
      </NavLink>
    )
  },
  {
    id: 3,
    text: (
      <NavLink to="/places" onClick={() => window.scrollTo(0, 0)} 
        className={({isActive}) => `${isActive ? "text-secondary" : "text-black"}`}>
          Best Places
      </NavLink>
    )
  },
  {
    id: 4,
    text: (
      <NavLink to="/about" onClick={() => window.scrollTo(0, 0)} 
        className={({isActive}) => `${isActive ? "text-secondary" : "text-black"}`}>
          About
      </NavLink>
    )
  },
]

const dropDownLinks = [
  {
    id: 1,
    text : 'Our Services',
  },
  {
    id: 2,
    text : 'Top Brands',
  },
  {
    id: 3,
    text : 'Locations',
  },
]

const Navbar = ({setBookPopup}) => {
  const [showMenubar, setShowMenubar] = useState(false);

  const toggleMenu = () => {
    setShowMenubar(!showMenubar);
  }

  return (
    <div>
      <div className='fixed top-0 right-0 z-20 w-full bg-white shadow-lg'>
        <div className='hidden bg-gradient-to-r from-primary to-secondary sm:grid grid-cols-3 place-items-center
        gap-8 sm:gap-15 md:gap-28 text-white py-1 px-4 text-xs sm:text-base'>
          <p className='text-center'>
            20% off on next booking
          </p>
          <p>&nbsp;</p>
          <p className='text-center'>mobile no +91 123456789</p>
        </div>
        <div className="container">
          <div className='flex gap-10 justify-between items-center'>

            {/* Logo Section */}
            <h1>
              <Link to="/">
                <img src={Logo} className='max-w-[120px] xl:max-w-[150px]' alt="logo"/>
              </Link>
            </h1>

            {/* Nav Links */}
            <div className='hidden lg:block'>
              <ul className='flex gap-6 sm:gap-10 text-base lg:text-xl font-semibold'>
                {
                  navLinks.map(({id, text}) => (
                    <li key={id}>
                      {text}
                    </li>
                  ))
                }
                
                <li className='group relative'>
                  <div className='group/quicklinks flex items-center gap-1 cursor-pointer'>
                    <span>Quick Links</span>
                    <span><FaCaretDown className="transition-all duration-500 group-hover/quicklinks:-rotate-180"/></span>
                  </div>
                  <div className='w-[160px] absolute hidden group-hover:block -left-4 z-20 shadow-md bg-white py-4 px-2'>
                    <ul>
                      {
                        dropDownLinks.map(({id, text, link}) => (
                          <li key={id} className='w-full'>
                            <span className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{text}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div>
              <button className='hidden min-[382px]:block bg-gradient-to-r from-primary to-secondary 
                rounded-full px-6 py-2 text-white text-lg lg:text-xl hover:scale-105 transition-all duration-300'
                onClick={() => setBookPopup(prev => !prev)}
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className='block lg:hidden'>
              {
                showMenubar ? (
                  <HiMenuAlt1 onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3 onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )
              }
            </div>
          </div>
        </div>

        {/* Responsive Menubar  */}
        <MobileResMenubar showMenubar={showMenubar} toggleMenu={toggleMenu}/>
      </div>
    </div>
  )
}

export default Navbar