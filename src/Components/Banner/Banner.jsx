import React,{ useState } from "react";
import Logo from "../../Asset/Images/logo.png"
import { HiArrowLeft,  HiArrowRight } from "react-icons/hi";
import Banner1 from "../../Asset/Images/banner.png";
import Banner2 from "../../Asset/Images/banner2.png"
import Banner3 from "../../Asset/Images/banner3.png"
import SliderLogo from "../../Asset/Images/sliderLogo.png"
import "./Banner.css"
import {BiRadioCircle} from "react-icons/bi"

const Banner = () => {

    const Slides = [
        { url : Banner1},
        { url : Banner2},
        { url : Banner3}
     ]
    
    
     const [currentIndex, setcurrentIndex] = useState(0)
    
     const PrevSlide = () =>{
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
      setcurrentIndex(newIndex)
     }
    
     const NextSlide = () => {
      const isLastSlide = currentIndex === Slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setcurrentIndex(newIndex)
     }

     const goToSlide = (index) => {
      setcurrentIndex(index);
    };
    
  return (
    <div className="h-[400px] md:max-w-[2500px] md:h-[800px] w-full relative">
    <div style={{backgroundImage: `url(${Slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover px-0 md:px-56 flex justify-center items-center">
    <div className="flex flex-col gap-2 md:flex-row md:flex justify-between md:gap-80"> 
          <div className="flex flex-col items-center md:items-start max-w-lg">
          <p className="text-center text-lg md:text-start md:text-6xl text-white" style={{fontFamily: "Krona One"}}>Let's Connect with the Alcohol Free World Outside your Door</p>
          <button className="bg-[#023D65] text-white rounded-lg px-2 py-2 mt-1 w-36 md:px-5 md:py-3  md:w-64 md:mt-14 font-medium text-sm md:text-lg">Create New Event</button>
          </div>
          <div className="flex justify-center items-center">
            <img src={Logo}  alt="" className=" w-[100px]  md:w-full"/>
          </div>
      </div>
      
    </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0  text-2xl rounded-e-full px-2 py-8 bg-white hover:bg-[#023D65] text-[#023D65] hover:text-white cursor-pointer shadow-md hover:shadow-white">
          <HiArrowLeft size={30} onClick={PrevSlide}/>
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-s-full px-2 py-8 bg-white hover:bg-[#023D65] text-[#023D65] hover:text-white cursor-pointer shadow-md hover:shadow-white">
          <HiArrowRight size={30} onClick={NextSlide}/>
        </div>

        <div className="absolute -mt-20 gap-28 right-5 flex justify-center items-center  md:gap-5">
        <div className="dots">
        {Slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          > <BiRadioCircle
          size={30}
          className={`dot-icon ${index === currentIndex ? "active" : ""}`}
          style={{ cursor: "pointer" }} 
        /></div>
        ))}
      </div>
      <img src={SliderLogo}  alt="" className=""/>
        </div>
       
    </div>
  )
}

export default Banner