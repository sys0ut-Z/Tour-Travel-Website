import React from 'react'
import Slider from 'react-slick'

const testimonials = [
  {
    id: 1,
    name : 'Tom',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt exercitationem sunt dicta repudiandae iste?",
    image : "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name : 'John',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt exercitationem sunt dicta repudiandae iste?",
    image : "https://picsum.photos/102/102",
  },
  { 
    id: 3,
    name : 'Thomas',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt exercitationem sunt dicta repudiandae iste?",
    image : "https://picsum.photos/103/103",
  },
  { 
    id: 4,
    name : 'Kevin',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt exercitationem sunt dicta repudiandae iste?",
    image : "https://picsum.photos/104/104",
  },
]

const sliderConfig = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000, // xl
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024, // lg
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      }
    },
    {
      breakpoint: 640, // sm
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}

const Testimonials = () => {
  return (
    <div className='py-12'>
      <div className="container">

        {/* Text Content Section */}
        <p className='text-center lg:text-lg text-secondary'>Testimonial</p>
        <h1 className='text-center text-3xl lg:text-4xl font-bold py-2'>Testimonials</h1>
        <p className='line-clamp-2 text-center text-pretty px-10 lg:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo similique corporis explicabo nesciunt eveniet illo dolorem accusamus. Harum, asperiores soluta
        </p>

        {/* Slider Section
          // * remember 3 things for slider
          1. parent div of Slider must have a specified width
          2. center image using block & mx-auto
          3. there should be a parent div for each box to give proper margin 
        */}
        <div className='max-w-[550px] lg:max-w-[730px] xl:max-w-[900px] mx-auto py-14'>
          <Slider {...sliderConfig}>
            {
              testimonials.map(({id, name, text, image})=> (
                <div key={id}>
                  <div className='relative mx-2 p-3 bg-secondary/10 space-y-2 rounded-lg'>
                    {/* if you don't want to use <div>, make the image block to center it using mx-auto */}
                    <img src={image} className='block mx-auto max-w-28 rounded-full' alt="avatar_img"/>
                    <h1 className='pl-3 text-lg lg:text-xl font-bold'>{name}</h1>
                    <p className='px-3 line-clamp-3 text-pretty'>{text}</p>
                    <p className='text-black/20 text-7xl absolute bottom-24 right-10 font-serif'>''</p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials