import React, { useState } from 'react'

const Hero = () => {
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <div className='bg-black/30 h-full w-full'>
      <div className='container flex flex-col gap-4 h-full justify-center'>

        {/* Text Content Section */}
        <h1 className='text-white text-lg lg:text-xl'
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Packages
        </h1>
        <h1 className='text-white font-bold text-3xl lg:text-4xl'
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Search Your Destination
        </h1>

        {/* Form Section */}
        <div className='relative grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white px-4 py-10 rounded-md'
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className='p-2 flex flex-col gap-2'>
            <label className='text-lg lg:text-xl tracking-wider'>Destination</label>
            <input type="text" placeholder='Dubai'
              className='bg-gray-200 py-[6px] px-4 rounded-full lg:text-lg focus:outline-1 focus:outline-secondary'
            />
          </div>
          <div className='p-2 flex flex-col gap-2'>
            <label className='text-lg lg:text-xl tracking-wider'>Date</label>
            <input type="date" placeholder='Dubai'
              className='date-indicator bg-gray-200 focus:outline-0 py-[6px] px-4 rounded-full lg:text-lg font-semibold'
            />
          </div>
          <div className='p-2 flex flex-col gap-2'>
            <label className='flex justify-between text-lg lg:text-xl tracking-wider'>
              <span>Max Price</span>
              <span className='font-bold '>$&nbsp;{sliderValue}</span>
            </label>

            {/* // ! Don't give horizontal padding to the slider */}
            <div className='bg-gray-200 py-2 px-4 rounded-full'>
              <input type="range" placeholder='Dubai'
                className='price-slider'
                min={60} max={1000} value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
              />
            </div>
          </div>

          {/* Form Section >> Button */}

            <button className='absolute left-1/2 -translate-x-1/2 -bottom-5 text-white px-6 py-2 
              bg-gradient-to-r from-primary to-secondary rounded-full text-lg sm:text-xl tracking-wider'>
              Search Now
            </button>
    
        </div>
      </div>
    </div>
  )
}

export default Hero