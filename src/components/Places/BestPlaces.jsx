import React from 'react'
import img1 from '../../assets/places/boat.jpg'
import img2 from '../../assets/places/tajmahal.jpg'
import img3 from '../../assets/places/water.jpg'
import img4 from '../../assets/places/place4.jpg'
import img5 from '../../assets/places/place5.jpg'
import img6 from '../../assets/places/place6.jpg'
import BestPlacesCard from './BestPlacesCard'

const places = [
  {
    image: img1,
    title : "Boat Tour",
    location: "USA",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe nemo, fuga veniam recusandae eos?",
    price : "$1200",
    type: "Cultural Relax"
  },
  {
    image: img2,
    title : "Taj Mahal",
    location: "India",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe nemo, fuga veniam recusandae eos?",
    price : "$1500",
    type: "Cultural Relax"
  },
  {
    image: img3,
    title : "Underwater",
    location: "US",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe nemo, fuga veniam recusandae eos?",
    price : "$7800",
    type: "Tourist Venture"
  },
  {
    image: img4,
    title : "Sydney",
    location: "Australia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe nemo, fuga veniam recusandae eos?",
    price : "$6700",
    type: "Tourist Place"
  },
  {
    image: img5,
    title : "Los Angeles",
    location: "USA",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe nemo, fuga veniam recusandae eos?",
    price : "$5420",
    type: "Tourist Place"
  },
  {
    image: img6,
    title : "Los Angeles",
    location: "California",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe nemo, fuga veniam recusandae eos?",
    price : "$7500",
    type: "Couple Special"
  },
]

const BestPlaces = ({setBookPopup}) => {
  return (
    <div>
      <div className='py-12 sm:py-16 bg-gray-50'>
        <div className="container">
          <h1 className='text-3xl sm:text-4xl font-bold border-l-8 border-l-secondary py-4 mb-6 pl-2'>
            Best Places to Visit
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              places.map((data, index) => (
                <BestPlacesCard key={index} {...data} setBookPopup={setBookPopup}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestPlaces