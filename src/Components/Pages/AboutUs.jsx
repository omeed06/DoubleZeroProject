import React from 'react'
import BlueBg from "../../Asset/Images/BlueBg.png"
import Carousel from "../../Asset/Images/carousel.png"

const AboutUs = () => {
  return (
    <>
    <div className="bg-Banner h-full w-full bg-cover bg-no-repeat py-36">
        <div className='flex justify-center items-center'>
        <p className='text-2xl font-normal text-white'>About us</p>
        </div>
    </div>
    <div className='p-14'>
        <div className='flex justify-center items-center'>
        <img src={Carousel} className='relative z-10' />
        <img src={BlueBg} className='absolute w-[85%] pt-32' />
        </div>
        <div className='mt-14 -ml-5'>
            <p className='text-3xl font-semibold my-2 text-[#023D65]'>Who we are?</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>

    <div className='p-14 bg-[#023D65]'>
        <div className='flex justify-center items-center'>
        <img src={Carousel} className='relative z-10' />
        <div className='absolute w-[70%] h-[230px] bg-[#2B5C7E] rounded-2xl mt-14 ml-16' />
        </div>
        <div className='mt-14'>
            <p className='text-3xl font-semibold my-2 text-white'>Who we are?</p>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

    </div>

    <div className='p-14'>
        <div className='flex justify-center items-center'>
        <img src={Carousel} className='relative z-10' />
        <img src={BlueBg} className='absolute w-[85%] pt-32' />
        </div>
        <div className='mt-14 -ml-5'>
            <p className='text-3xl font-semibold my-2 text-[#023D65]'>Our mission</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
    </>
    
  )
}

export default AboutUs