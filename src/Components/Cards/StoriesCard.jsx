import React from 'react'
import ImageCarousel from "../../Asset/Images/carousel.png"
import Stories from './Stories'

const StoriesCard = () => {

  return (
    <>
        <div className="bg-white shadow-2xl border rounded-3xl max-w-md">
          <img src={ImageCarousel} className="p-3 bg-cover"  alt="" />
          <Stories />
        </div>


      
    </>
  )
}

export default StoriesCard