import React from 'react'
import ImageCarousel from "../../Asset/Images/carousel.png"
import Carousel from 'react-multi-carousel';

const Stories = () => {
  return (
    <div className="flex flex-col p-3">
    <h2 className="font-bold text-3xl pb-3">Story Title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ducimus consectetur quisquam explicabo .</p>
    <button className=" bg-[#023D65] text-white rounded-lg px-2 py-2 md:px-5 md:py-3 w-36  md:w-64 mt-5  font-medium text-sm md:text-lg">Read More</button>
  </div>


  )
}

export default Stories