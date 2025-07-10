import React, { useState } from 'react'
import NatureVideo from '../assets/video/main.mp4'
import Hero from '../components/Hero/Hero'
import BestPlaces from '../components/Places/BestPlaces'
import Banner from '../components/Banner/Banner'
import BannerImg from '../assets/cover-women.jpg'
import BannerImg2 from '../assets/travel-cover2.jpg'
import Blogs from './Blogs'
import AnimatedBaner from '../components/AnimatedBanner/AnimatedBaner'
import Testimonials from '../components/Testimonials/Testimonials'
import BookPopup from '../components/BookPopup/BookkPopup'

const Home = () => {
  const [bookPopup, setBookPopup] = useState(false);

  return (
    /* 
      ! some part of the Home will be behind the Navbar so give top-[160px] to properly display the video
      ! why this is happening ? : coz Navbar is fixed and probably due to top-0 & left-0

      * adjust it accordingly for any other website
    */
    <>
      <div>
        <div className='relative h-[700px]'> {/* // ? relative */ }
          <video
            autoPlay muted loop
            className='absolute top-0 left-0 h-full w-full object-cover z-[-1]' // ? absolute top-0 left-0
          >
            <source src={NatureVideo} type="video/mp4"/>
          </video>
          <Hero />
        </div>
        <BestPlaces setBookPopup={setBookPopup} />
        <Banner image={BannerImg}/>
        <Blogs />
        <AnimatedBaner />
        <Banner image={BannerImg2} />
        <Testimonials />
        {/* <div className='relative h-[500px]'>
          <video autoPlay muted loop className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'>
            <source src={FooterVideo} type="video/mp4"/>
          </video>
          <Footer />
        </div> */}

        <BookPopup bookPopup={bookPopup} setBookPopup={setBookPopup}/>
      </div>
    </>
  )
}

export default Home