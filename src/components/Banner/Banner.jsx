import React from 'react'

const Banner = ({image}) => {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}
      data-aos="zoom-in"
      className='h-[400px] w-full'
    >

    </div>
  )
}

export default Banner