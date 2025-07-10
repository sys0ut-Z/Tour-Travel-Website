import React from 'react'
import BlogCard from './BlogCard'
import img1 from '../../assets/places/boat.jpg'
import img2 from '../../assets/places/tajmahal.jpg'
import img3 from '../../assets/places/water.jpg'

const blogs = [
  {
    image: img1,
    blogDate: 'April 22, 2022',
    author: 'Tobey Maguire',
    title: 'Top 10 Places to visit in India',
    overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita officia dolorum sapiente quas ea!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, neque laborum quis aperiam omnis eos iusto. Molestias tenetur deserunt vero aperiam, perferendis odit consequatur possimus ab harum ullam incidunt ipsa odio reiciendis nulla? Quo aliquam sint quis numquam recusandae. Inventore, quaerat voluptatem? Cum amet dolor blanditiis non vel illum, nulla et voluptatem nostrum totam quia dignissimos vitae tempore. Enim laudantium veritatis dolores voluptas, ad et placeat cumque earum facere ratione sunt deleniti accusantium repudiandae harum esse tempora explicabo quo quod architecto ullam molestias illum. Ex vero labore quos nulla magni in doloribus enim pariatur nisi fugit qui aperiam natus sit necessitatibus ea ipsum iure, delectus atque asperiores praesentium cum velit. Omnis nam qui ad quos. Facere sunt quaerat odio laborum vel ea architecto deleniti ipsa quae labore nulla a velit voluptates atque temporibus veniam ullam, dolorum totam sequi deserunt sapiente. Numquam quibusdam nisi repudiandae, repellendus quaerat doloremque tempora quia qui? Sunt, porro. Dolores obcaecati assumenda at quasi in laboriosam, fugit voluptate eaque debitis quae repudiandae praesentium commodi et sequi optio magnam a saepe. Nihil, quas distinctio! Ipsum assumenda hic ipsa libero rerum distinctio eaque, ipsam ullam sint voluptatibus veritatis, a optio. Dignissimos quod ea rem hic reiciendis fuga omnis. Fugiat?"
  },
  {
    image: img2,
    blogDate: 'April 22, 2022',
    author: 'Andrew Garfield',
    title: 'Top 10 Places to visit in US',
    overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita officia dolorum sapiente quas ea!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, neque laborum quis aperiam omnis eos iusto. Molestias tenetur deserunt vero aperiam, perferendis odit consequatur possimus ab harum ullam incidunt ipsa odio reiciendis nulla? Quo aliquam sint quis numquam recusandae. Inventore, quaerat voluptatem? Cum amet dolor blanditiis non vel illum, nulla et voluptatem nostrum totam quia dignissimos vitae tempore. Enim laudantium veritatis dolores voluptas, ad et placeat cumque earum facere ratione sunt deleniti accusantium repudiandae harum esse tempora explicabo quo quod architecto ullam molestias illum. Ex vero labore quos nulla magni in doloribus enim pariatur nisi fugit qui aperiam natus sit necessitatibus ea ipsum iure, delectus atque asperiores praesentium cum velit. Omnis nam qui ad quos. Facere sunt quaerat odio laborum vel ea architecto deleniti ipsa quae labore nulla a velit voluptates atque temporibus veniam ullam, dolorum totam sequi deserunt sapiente. Numquam quibusdam nisi repudiandae, repellendus quaerat doloremque tempora quia qui? Sunt, porro. Dolores obcaecati assumenda at quasi in laboriosam, fugit voluptate eaque debitis quae repudiandae praesentium commodi et sequi optio magnam a saepe. Nihil, quas distinctio! Ipsum assumenda hic ipsa libero rerum distinctio eaque, ipsam ullam sint voluptatibus veritatis, a optio. Dignissimos quod ea rem hic reiciendis fuga omnis. Fugiat?"
  },
  {
    image: img3,
    blogDate: 'April 22, 2022',
    author: 'Tom Holland',
    title: 'Top 10 Places to visit in Australia',
    overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita officia dolorum sapiente quas ea!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, neque laborum quis aperiam omnis eos iusto. Molestias tenetur deserunt vero aperiam, perferendis odit consequatur possimus ab harum ullam incidunt ipsa odio reiciendis nulla? Quo aliquam sint quis numquam recusandae. Inventore, quaerat voluptatem? Cum amet dolor blanditiis non vel illum, nulla et voluptatem nostrum totam quia dignissimos vitae tempore. Enim laudantium veritatis dolores voluptas, ad et placeat cumque earum facere ratione sunt deleniti accusantium repudiandae harum esse tempora explicabo quo quod architecto ullam molestias illum. Ex vero labore quos nulla magni in doloribus enim pariatur nisi fugit qui aperiam natus sit necessitatibus ea ipsum iure, delectus atque asperiores praesentium cum velit. Omnis nam qui ad quos. Facere sunt quaerat odio laborum vel ea architecto deleniti ipsa quae labore nulla a velit voluptates atque temporibus veniam ullam, dolorum totam sequi deserunt sapiente. Numquam quibusdam nisi repudiandae, repellendus quaerat doloremque tempora quia qui? Sunt, porro. Dolores obcaecati assumenda at quasi in laboriosam, fugit voluptate eaque debitis quae repudiandae praesentium commodi et sequi optio magnam a saepe. Nihil, quas distinctio! Ipsum assumenda hic ipsa libero rerum distinctio eaque, ipsam ullam sint voluptatibus veritatis, a optio. Dignissimos quod ea rem hic reiciendis fuga omnis. Fugiat?"
  },
]

const BlogsComp = () => {
  return (
    <div>
      <div className='py-12 sm:py-16 bg-gray-50'
        data-aos="fade-up"
      >
        <div className="container">
          <h1 className='text-3xl sm:text-4xl font-bold border-l-8 border-l-secondary py-4 mb-6 pl-2'>
            Our Latest Blogs
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              blogs.map((data, index) => (
                <BlogCard {...data} key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsComp