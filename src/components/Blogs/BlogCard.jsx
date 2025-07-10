import React from 'react'
import { Link } from 'react-router'

const BlogCard = ({
  image,
  blogDate,
  author,
  title,
  overview,
  description,
}) => {
  return (
    <Link to={`/blogs/${title}`}
      onClick={() => window.scrollTo(0, 0)}

      // ^ to send the data to the specified route
      state={{
        image, blogDate, author, title, 
        description 
      }}
    >
      <div className='bg-white shadow-lg cursor-pointer rounded-md pb-2
      sm:hover:scale-105 sm:transition-all sm:duration-500'>
        {/* Image Section 
              // * reasons for overflow-hidden
              // 1. size of the image is greater than the parent(however it is intentional for hover)
              // 2. on hover we have to increase the scale of the image
        */}
        <div className='pb-2 max-h-[300px] max-w-full overflow-hidden'>
          <img src={image} className='max-h-[350px] min-w-full rounded-t-md'/>
        </div>

        {/* Text Content Section */}
        <div className='flex flex-col'>
          <div className='m-3 pb-2 space-y-4'>
            <h1 className='flex justify-between text-lg lg:text-xl'>
              <span>{blogDate}</span> 
              <span>{author}</span>
            </h1>
            <p className='text-lg lg:text-xl font-bold'>{title}</p>
            <p className='text-pretty'>{overview}</p>
          </div>
        </div>
      </div>
    </Link >
  )
}

export default BlogCard