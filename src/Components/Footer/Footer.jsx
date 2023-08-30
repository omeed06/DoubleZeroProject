import React from 'react'
import Logo from "../../Asset/Images/logo.png";
import {AiOutlineInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <>
    <div className='bg-[#023D65] w-full h-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center px-32 py-10'>
        <div className='flex justify-start items-center'>
            <img src={Logo} className='w-[6em] h-[100px]' />
        </div>
   
       <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center gap-4 my-3 sm:gap-8 '>
                <p className='font-normal text-white text-sm sm:text-2xl'>About Us</p>
                <div className='border-[#ffffff] border-r-[2px] h-5 sm:h-10'></div>
                <p className='font-normal text-white text-sm sm:text-2xl'>Contact Us</p>
                <div className='border-[#ffffff] border-r-[2px] h-5 sm:h-10'></div>
                <AiOutlineInstagram style={{color: 'white', fontSize: '30px'}}/>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <p className='font-normal text-white text-sm text-center md:text-justify sm:text-xl tracking-wide' style={{fontFamily: "Helvetica"}}>By signing up, you agree to <a href='#' className='underline'>Terms of Service</a>, <a href='#' className='underline'>Privacy Policy</a>, and <a href='#' className='underline'>Cookie Policy</a>,</p>
                <p className='font-normal text-white text-sm text-center md:text-justify sm:text-xl tracking-wide' style={{fontFamily: "Helvetica"}}>Copyright@Lorem Ipsum is simply dummy tex</p>
            </div>
       </div>

       <div className='flex justify-center items-center hidden md:block'>
        {/* invisible text */}
        <p>ㅤ</p>
       </div>
       
    </div>
    </>
  )
}

export default Footer