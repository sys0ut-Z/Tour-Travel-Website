import React from 'react'
import Logo from '../../assets/logo.png'
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import FooterVideo from '../../assets/video/footer.mp4'
import { Link } from 'react-router';

const footerLinks = [
  {
    id: "l1",
    text: <Link to="/">Home</Link>,
  },
  {
    id: "l2",
    text: <Link to="/about">About</Link>,
  },
  {
    id: "l3",
    text: <Link to="/places">Best Places</Link>,
  },
  {
    id: "l4",
    text: <Link to="/blogs">Blogs</Link>,
  },
]

const footerLocations = [
  {
    id: 1,
    text: "India",
    llink: "/#india",
  },
  {
    id: 2,
    text: "US",
    llink: "/#us",
  },
  {
    id: 3,
    text: "Canada",
    llink: "/#canada",
  },
  {
    id: 4,
    text: "China",
    llink: "/#china",
  },
]

const Footer = () => {
  return (
    /* 
      ! keep height fit below lg, bcoz of background video
    */
    <div className='relative h-fit lg:h-[500px]'> {/* // ? optional(if video misbehaves) : max-lg:bg-gray-300 */}

      {/* Video */}
      <video 
        autoPlay muted loop 
        className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
      >
        <source src={FooterVideo} type="video/mp4"/>
      </video>

      {/* Footer Component */}
      <div>
        <div className='py-12 '>
          <div className="container bg-white/80 backdrop-blur-sm rounded-t-lg py-12">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-7'>

              {/* Text Content Section */}
              <div className='col-span-1 space-y-2'>
                <img src={Logo} className='max-w-20'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Quis mollitia dicta assumenda ratione accusantium laudantium
                </p>
                <div className='py-3 space-y-1'>
                  <p className='flex items-center gap-3'>
                    <span><FaLocationArrow size={20}/></span>
                    <span className='text-lg'>Ahmedabad, Gujarat</span>
                  </p>
                  <p className='flex items-center gap-3'>
                    <span><IoIosPhonePortrait size={20}/></span>
                    <span className='text-lg'>+91 123 456 7890</span>
                  </p>
                </div>

                {/* Text Content >> Social Media Handles */}
                <p className='flex gap-3'>
                  {
                    [<FaInstagram />, <FaFacebook />, <FaLinkedin />].map((text, id) => (
                      <span className='text-2xl hover:scale-105 hover:text-secondary transition-all duration-300
                        cursor-pointer' key={id}>
                        {text}
                      </span>
                    ))
                  }
                </p>
              </div>

              {/* Links Section */}
              <div className='col-span-2 grid grid-cols-2'>

                {/* Link Section 1 */}
                <div>
                  <h1 className='text-2xl lg:text-3xl font-bold'>Important Links</h1>
                  <div className='py-5'>
                    <ul className='space-y-6'>
                      {
                        footerLinks.map(({id, text}) => (
                          <li key={id} className='lg:text-lg hover:text-secondary'>{text}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>

                {/* Link Section 2 */}
                <div>
                  <h1 className='text-2xl lg:text-3xl font-bold'>Important Links</h1>
                  <div className='py-5'>
                    <ul className='space-y-6'>
                      {
                        footerLinks.map(({id, text}) => (
                          <li key={id} className='lg:text-lg hover:text-secondary'>{text}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className='col-span-1'>
                <h1 className='text-3xl font-bold'>Locations</h1>
                <div className='py-5'>
                  <ul className='space-y-6'>
                    {
                      footerLocations.map(({id, text, llink}) => (
                        <li key={id} className='lg:text-lg hover:text-secondary'>
                          <a href={llink} className='lg:text-lg hover:text-secondary'>{text}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer