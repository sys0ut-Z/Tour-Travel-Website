import React from 'react'
import { IoClose } from "react-icons/io5";

const inputFields = [
  {
    id: 1,
    text: 'Name'
  },
  {
    id: 2,
    text: 'Email'
  },
  {
    id: 3,
    text: 'Address'
  },
]

const BookPopup = ({bookPopup, setBookPopup}) => {
  return (
    <>
      {/* // * alternative : bookPopup && <div></div> */}
      <div className={`fixed top-0 left-0 z-50 h-screen w-screen bg-black/70 backdrop-blur-sm
        ${bookPopup ? "block" : "hidden"}`}>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4
          bg-white rounded-md w-[330px] sm:w-[370px]'>
          <div className='space-y-6'>
            <h1 className='px-2 text-3xl font-semibold flex justify-between items-center'>
              <span>Book Your Trip</span>
              <span className='cursor-pointer'>
                <IoClose onClick={() => setBookPopup(prev => !prev)}/>
              </span>
            </h1>
            {
              inputFields.map(({id, text}) => (
                <input type="text" key={id}
                className='caret-secondary text-lg py-[6px] px-4 w-full rounded-full outline-none border-2 border-gray-200
                focus:border focus:border-secondary' placeholder={text}/>
              ))
            }
          </div>
          <div className='flex justify-center pt-6'>
            <button className='text-white text-lg px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookPopup