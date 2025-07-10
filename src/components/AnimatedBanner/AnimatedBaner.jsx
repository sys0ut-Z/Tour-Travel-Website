import React from 'react'
import TravelBoxImg from '../../assets/travelbox.png'
import { BiSolidPlane } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";

const services = [
  // ^ increase the padding to decrase the size of the icon
  {
    id: 1,
    icon : <BiSolidPlane className='bg-purple-100 p-4 rounded-full' size={50}/>,
    text : "Flight",
    aosDelay : "600"
  },
  {
    id: 2,
    icon : <MdHotel className='bg-orange-100 p-4 rounded-full' size={50} />,
    text : "Hotel",
    aosDelay : "700"
  },
  {
    id: 3,
    icon : <FaWifi className='bg-green-100/70 p-4 rounded-full' size={50}/>,
    text : "Wifi",
    aosDelay : "800"
  },
  {
    id: 4,
    icon : <IoFastFood className='bg-yellow-100 p-4 rounded-full' size={50} />,
    text: "Fast Food",
    aosDelay : "900"
  }
]

const AnimatedBaner = () => {
  return (
    <div className='py-12'>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          
          {/* Image Section */}
          <div className='flex justify-center items-center'>
            <img src={TravelBoxImg} className='min-w-[350px] sm:min-w-[450px] lg:min-w-[520px]' 
              data-aos="flip-up"
              data-aos-delay="300"
            />
          </div>

          {/* Text Content Section */}
          <div className='space-y-4'>
            <h1 className='text-3xl lg:text-4xl font-bold'
              data-aos="fade-up"
              data-aos-delay="400"
            >Explore all corners of the World with us</h1>
            <p className='line-clamp-2 text-pretty text-lg'
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas praesentium suscipit id facilis eaque nisi quos impedit beatae tempora voluptas.
            </p>
            <div className='py-4'>
              <ul className='grid grid-cols-2 md:grid-cols-1 gap-6'>
                {
                  services.map(({id, icon, text, aosDelay}) => (
                    <li key={id} className='flex items-center text-xl'
                      data-aos="fade-up"
                      data-aos-delay={aosDelay}
                    >
                      {icon}&nbsp;&nbsp;
                      <span className='tracking-wide'>{text}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedBaner