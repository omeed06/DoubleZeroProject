import React from 'react'
import ImageCarousel from "../../Asset/Images/carousel.png"
import Events from './Events';

const EventsCard = () => {

  return (
    <>
        <div className="bg-white shadow-2xl rounded-3xl max-w-md">
          <img src={ImageCarousel} className="p-3 bg-cover"  alt="" />
          <Events />
        </div>


      
    </>
  )
}

export default EventsCard