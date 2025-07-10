import React from 'react'
import { useLocation } from 'react-router'
// import tajMahal from '../assets/places/tajmahal.jpg'

const BlogDetails = () => {

  // fetch the data from the state, using useLocation() hook
  const location = useLocation();

  // destructure all the elements
  const {image, blogDate, title, description, author} = location.state;

  return (
    <div className='pt-24'>
      <div className='h-[350px] sm:h-[500px] lg:h-[700px] w-full'>
        <img src={image} className='mx-auto block h-full w-full'/>
      </div>
      <div className="container py-6 space-y-6">
        <p className='text-base lg:text-lg pb-1'>written by {author} on {blogDate}</p>
        <h1 className='text-3xl lg:text-4xl font-semibold'>{title}</h1>
        <p className='text-lg text-pretty'>{description}</p>
      </div>
    </div>
  )
}

export default BlogDetails