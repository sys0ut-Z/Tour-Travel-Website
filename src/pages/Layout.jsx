import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import BookPopup from '../components/BookPopup/BookkPopup'

const Layout = () => {
  const [bookPopup, setBookPopup] = useState(false);
  return (
    <>
      <Navbar setBookPopup={setBookPopup} />
      <Outlet />
      <Footer />
      <BookPopup bookPopup={bookPopup} setBookPopup={setBookPopup}/>
    </>
  )
}

export default Layout