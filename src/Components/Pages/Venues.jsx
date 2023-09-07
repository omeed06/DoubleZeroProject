import React,{useState} from 'react'
import {FiSearch} from "react-icons/fi"
import Filter from "../../Asset/Images/filter.svg"
import {BsToggle2On} from "react-icons/bs"
import Carousel from "../../Asset/Images/carousel.png"
import FilterModal from '../Modals/FilterModal';

const Venues = () => {

const [venues, setVenues] = useState(false)

const OpenVenue = () =>{
  setVenues(true)
}

const CloseVenue = () => {
  setVenues(false)
}


  return (
    <><div className='bg-[#F6F5F7] px-5 py-5 md:px-32 md:py-10'>
    <div className="bg-white rounded-lg px-5 py-5 md:px-0 md:py-0 md:flex justify-center items-center ">
      <div className='gap-5 flex'>
        <div className='flex justify-center items-center w-full'>
        <input type="text" className='relative bg-[#F8F8F8] border outline-none px-14 py-3 rounded-lg w-full text-[16px]' placeholder='Search for "keywords"' />
       <FiSearch className='absolute left-14' style={{color: '#808080',fontSize: '20px' }}/>
       </div>
       <img src={Filter} onClick={OpenVenue} className='cursor-pointer'/>
       {venues && <FilterModal venues={OpenVenue} CloseVenue={CloseVenue}/>}
      
      </div>

      <div className='mt-2 flex justify-between items-center'>
        <p>Suggested Events</p>
        <BsToggle2On style={{fontSize: "20px", color: "#023D65"}}/>
      </div>

      <div className='my-5'>
        <p className='text-[#515151] text-lg font-bold'>Friday, March 10</p>
        <div className='border-[#515151] border-b-[1px] w-full my-2'></div>
        <div className='p-5'>
        <img src={Carousel} />
        <p className='my-2 font-medium'>Friday, March 10</p>
        <h2 className='font-bold text-2xl'>Event Heading</h2>
        <p className='my-2 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='my-2 font-medium'>9 attendees</p>
        </div>
      </div>


      <div className='my-5'>
        <p className='text-[#515151] text-lg font-bold'>Saturday, March 11</p>
        <div className='border-[#515151] border-b-[1px] w-full my-2'></div>
        <div className='p-5'>
        <img src={Carousel} />
        <p className='my-2 font-medium'>Saturday, March 11</p>
        <h2 className='font-bold text-2xl'>Event Heading</h2>
        <p className='my-2 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='my-2 font-medium'>9 attendees</p>
        </div>
      </div>


      <div className='my-5'>
        <p className='text-[#515151] text-lg font-bold'>Tuesday, March 14</p>
        <div className='border-[#515151] border-b-[1px] w-full my-2'></div>
        <div className='p-5'>
        <img src={Carousel} />
        <p className='my-2 font-medium'>Tuesday, March 14</p>
        <h2 className='font-bold text-2xl'>Event Heading</h2>
        <p className='my-2 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='my-2 font-medium'>9 attendees</p>
        </div>
      </div>


      <div className='my-5'>
        <p className='text-[#515151] text-lg font-bold'>Thursday, March 16</p>
        <div className='border-[#515151] border-b-[1px] w-full my-2'></div>
        <div className='p-5'>
        <img src={Carousel} />
        <p className='my-2 font-medium'>Thursday, March 16</p>
        <h2 className='font-bold text-2xl'>Event Heading</h2>
        <p className='my-2 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='my-2 font-medium'>9 attendees</p>
        </div>
      </div>


      <div className='my-5'>
        <p className='text-[#515151] text-lg font-bold'>Sunday, March 19</p>
        <div className='border-[#515151] border-b-[1px] w-full my-2'></div>
        <div className='p-5'>
        <img src={Carousel} />
        <p className='my-2 font-medium'>Sunday, March 19</p>
        <h2 className='font-bold text-2xl'>Event Heading</h2>
        <p className='my-2 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='my-2 font-medium'>9 attendees</p>
        </div>
      </div>

      </div>
      </div></>
  )
}

export default Venues