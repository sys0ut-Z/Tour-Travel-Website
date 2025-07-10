import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'
import PlacesRoute from "./pages/PlacesRoute"
import About from './pages/About'
import NoPage from "./pages/NoPage"

// import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import { useState } from "react"
import Blogs from "./pages/Blogs"

function App() {
  const [bookPopup, setBookPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 800,
      easing : 'ease-in-out',
      delay : 100,
    });
    AOS.refresh();
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={
          <div className="pt-24">
            <Blogs />
          </div> } />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/places" element={<PlacesRoute setBookPopup={setBookPopup} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
