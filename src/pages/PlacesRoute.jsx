import React from 'react'
import BestPlaces from '../components/Places/BestPlaces'

const PlacesRoute = ({setBookPopup}) => {
  return (
    <div className='pt-24'>
      <BestPlaces setBookPopup={setBookPopup}/>
    </div>
  )
}

export default PlacesRoute