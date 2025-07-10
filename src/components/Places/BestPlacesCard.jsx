import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const BestPlacesCard = ({
  image,
  title, 
  location,
  description,
  price,
  type,
  setBookPopup
}) => {
  return (
    <div className='bg-white shadow-lg cursor-pointer rounded-md'
      onClick={() => setBookPopup(prev => !prev)}
    >
      {/* Image Section 
        // * reasons for overflow-hidden
        // 1. size of the image is greater than the parent(however it is intentional for hover)
        // 2. on hover we have to increase the scale of the image
      */}
      <div className='pb-2 max-h-[300px] max-w-full overflow-hidden'>
        <img src={image} className='max-h-[350px] min-w-full rounded-t-md
          hover:skew-x-2 hover:scale-110 transition-all duration-500'/>
      </div>

      {/* Text Content Section */}
      <div className='flex flex-col'>
        <div className='m-3 pb-2 border-b-2 border-b-gray-300 space-y-2'>
          <h1 className='text-lg lg:text-xl font-bold'>{title} </h1>
          <p className='flex items-center text-lg'><IoLocationSharp />&nbsp;&nbsp;{location}</p>
          <p className='text-pretty'>{description}</p>
        </div>
        <div className='p-3'>
          <p className='flex justify-between items-center'>
            <span className='tracking-wide text-lg'>{type}</span>
            <span className='text-xl lg:text-2xl font-bold'>{price}</span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default BestPlacesCard