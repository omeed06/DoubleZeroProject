import React,{useState} from 'react'
import {FiSearch} from "react-icons/fi"
import Filter from "../../Asset/Images/filter.svg"
import {BsToggle2On} from "react-icons/bs"
import Carousel from "../../Asset/Images/carousel.png"
import FilterModal from '../Modals/FilterModal';
import Buttons from "../Inputs/Buttons"
import { useMediaQuery } from 'react-responsive';

const Venues = () => {

const isMobile = useMediaQuery({ maxWidth: 640 });
const isDesktop = useMediaQuery({ minWidth: 768, maxWidth: 2556 });

const [venues, setVenues] = useState(true)

const OpenVenue = () =>{
  setVenues(true)
}

const CloseVenue = () => {
  setVenues(false)
}


  return (
    <><div className='bg-[#F6F5F7] px-5 py-5 md:px-32 md:py-10'>
    <div className="bg-white rounded-lg px-5 py-5 md:flex flex-col justify-center items-center ">
      <div className='gap-5 flex md:mt-10'>
        <div className='relative flex justify-center items-center w-full sm:w-[500px]'>
        <input type="text" className=' bg-[#F8F8F8] border outline-none px-14 py-3 rounded-lg w-full ' placeholder='Search for "keywords"' />
       <FiSearch className='absolute left-4 text-[20px] text-[#808080] md:text-[30px]' />
       </div>
       <img src={Filter} onClick={OpenVenue} className='cursor-pointer md:w-12'/>
       {venues && <FilterModal venues={OpenVenue} CloseVenue={CloseVenue}/>}
      </div>

      {isMobile && <div className='mt-2 flex justify-between items-center'>
                <p>Suggested Events</p>
                <BsToggle2On style={{fontSize: "20px", color: "#023D65"}}/>
                </div> }

      {isDesktop && <button className='text-white mt-5 font-semibold bg-[#023D65] rounded-lg px-5 py-3 w-[500px] mr-[60px]'>Create Venue</button>}          
      

       

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