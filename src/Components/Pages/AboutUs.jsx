import React from 'react'
import BlueBg from "../../Asset/Images/BlueBg.png"
import Carousel from "../../Asset/Images/carousel.png"

const AboutUs = () => {
  return (
    <>
    <div className="bg-Banner h-full w-full bg-cover bg-no-repeat py-36 md:h-[600px] md:py-56">
        <div className='flex justify-center items-center'>
        <p className='text-2xl font-normal text-white md:text-6xl'>About us</p>
        </div>
    </div>
    <div className='p-14 md:flex justify-center items-center md:mx-72 gap-20 md:p-24'>
        <div className='flex justify-center items-center'>
        <img src={Carousel} className='relative z-10 md:max-w-[500px]' />
        <img src={BlueBg} className='absolute w-[85%] pt-32 md:w-[30%]' />
        </div>
        <div className=' mt-14 -ml-5 md:mt-0 md:-ml-0 md:flex justify-center items-start md:flex-col'>
            <p className='text-3xl font-semibold my-2 text-[#023D65] md:text-6xl md:my-5'>Who we are?</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>


<div className='bg-[#023D65]'>
    <div className='p-14 md:flex justify-center items-center gap-20 md:p-24 md:mx-72'>
        <div className='flex justify-center items-center'>
            <img src={Carousel} className='relative z-10 md:max-w-[500px] '/>
        <div className='absolute w-[70%] h-[230px] bg-[#2B5C7E] rounded-2xl mt-14 ml-16 md:w-[25%] md:h-[320px] md:mt-10' />
        </div>
        <div className=' mt-14 -ml-5 md:mt-0 md:-ml-0 md:flex justify-center items-start md:flex-col'>
            <p className='text-white text-3xl font-semibold my-2 md:text-6xl md:my-5'>Who we are?</p>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
</div>
    
<div className='p-14 md:flex justify-center items-center md:mx-72 gap-20 md:p-24'>
        <div className='flex justify-center items-center'>
        <img src={Carousel} className='relative z-10 md:max-w-[500px]' />
        <img src={BlueBg} className='absolute w-[85%] pt-32 md:w-[30%]' />
        </div>
        <div className=' mt-14 -ml-5 md:mt-0 md:-ml-0 md:flex justify-center items-start md:flex-col'>
            <p className='text-3xl font-semibold my-2 text-[#023D65] md:text-6xl md:my-5'>Our mission?</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
    </>
    
  )
}

export default AboutUs