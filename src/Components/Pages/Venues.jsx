import React from 'react'
import {FiSearch} from "react-icons/fi"
import Filter from "../../Asset/Images/filter.svg"

const Venues = () => {
  return (
    <><div className='bg-[#F6F5F7] px-5 py-5 md:px-32 md:py-10'>
    <div className="bg-white rounded-lg px-5 py-5 md:px-0 md:py-0 md:flex justify-center items-center ">
      <div className='gap-5 flex'>
        <div className='flex justify-center items-center w-full'>
        <input type="text" className='relative bg-[#F8F8F8] border outline-none px-14 py-3 rounded-lg w-full text-[16px]' placeholder='Search for "keywords"' />
       <FiSearch className='absolute z-10 left-14' style={{color: '#808080',fontSize: '20px' }}/>
       </div>
       <img src={Filter}/>
      </div>

      <div className='mt-2'>
        <p>Suggested Events</p>

      </div>
      </div>
      </div></>
  )
}

export default Venues