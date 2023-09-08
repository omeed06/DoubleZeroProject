import React from 'react'
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import Buttons from '../Inputs/Buttons';
import "./FilterModal.css"

const FilterModal = ({ venues, CloseVenue}) => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <>
    <Modal isOpen={venues} onRequestClose={CloseVenue} className='filtermodal' overlayClassName='filter-overlay'>
       


          <div className='bg-[#023D65] rounded-br-lg rounded-bl-lg px-10'>
          <div className='flex justify-end pt-5'>
            <button onClick={CloseVenue} className='font-bold'>{<AiOutlineClose style={{fontSize: '20px', color: "white"}}/>}</button>
          </div>
            <div className=' flex justify-between items-center py-5'>
              <h2 className='text-white font-bold text-lg'>Venue Type</h2>
              <p className='underline text-white'>Reset</p>
            </div>
            <div className='relative'>
            <FiSearch className='absolute right-8 text-[20px] text-[#808080] md:text-[30px] top-3' />
            <input type="text" className='bg-white px-5 py-3 w-96 rounded-lg outline-none shadow-md -mb-10' placeholder='Madrid,Paris, London ' />
            </div>
           
          </div>


          <div className='overflow-y-scroll h-[250px] md:h-[400px]'>
            {/* venues content start */}

            <div className='mt-10 px-10'>
            <p className='font-semibold'>Distance</p>
          </div>

          <div className='flex flex-col mx-10 my-5'>
          <div className='flex flex-row'>
          <div className='bg-[#023D65] text-white border border-[#707070] font-medium w-[125px] rounded-tl-md rounded-bl-md px-3 py-1'>2 miles</div>
          <div className='border border-[#707070] font-medium w-[125px] px-3 py-1'>5 miles</div>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tr-md rounded-br-md px-3 py-1'>10 miles</div>
          </div>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tl-md rounded-bl-md px-3 py-1'>anywhere</div>
          </div>


          <div className='mt-5 px-10'>
            <p className='font-semibold'>Alcohol Free</p>
          </div>

          <div className='flex flex-col mx-10 my-2'>
          <div className='flex flex-row'>
          <div className='bg-[#023D65] text-white border border-[#707070] font-medium w-[190px] rounded-tl-md rounded-bl-md px-3 py-2'>Alcohol Free</div>
          <div className='border border-[#707070] font-medium w-[190px] rounded-tr-md rounded-br-md px-3 py-2'>Mixed Company</div>
          </div>
          </div>


          <div className='mt-5 px-10'>
            <p className='font-semibold'>Vibe (type)</p>
          </div>

          <div className='flex flex-col mx-10 my-2'>
          <div className='flex flex-row'>
          <div className='bg-[#023D65] text-white border border-[#707070] font-medium w-[125px] rounded-tl-md rounded-bl-md px-3 py-1'>Activity</div>
          <div className='border border-[#707070] font-medium w-[125px] px-3 py-1'>Social</div>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tr-md rounded-br-md px-3 py-1'>Dance</div>
          </div>
          <div className='flex flex-row'>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tl-md rounded-bl-md px-3 py-1'>Food</div>
          <div className='border border-[#707070] font-medium w-[125px] px-3 py-1'>Bev</div>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tr-md rounded-br-md px-3 py-1'>Sports</div>
          </div>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tl-md rounded-bl-md px-3 py-1'>Educational</div>
          </div>


          <div className='mt-5 px-10'>
            <p className='font-semibold'>Event Size</p>
          </div>

          <div className='flex flex-col mx-10 my-2'>
          <div className='flex flex-row'>
          <div className='bg-[#023D65] text-white border border-[#707070] font-medium w-[125px] rounded-tl-md rounded-bl-md px-3 py-1'>1-10</div>
          <div className='border border-[#707070] font-medium w-[125px] px-3 py-1'>10-25</div>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tr-md rounded-br-md px-3 py-1'>Dance</div>
          </div>
          <div className='flex flex-row'>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tl-md rounded-bl-md px-3 py-1'>50-100</div>
          <div className='border border-[#707070] font-medium w-[125px] rounded-tr-md rounded-br-md px-3 py-1'>100+</div>
          </div>
          </div>
        
            {/*  venues content end */}
          </div>

          <div className='bg-white border-t-[2px] mt-5 flex justify-center items-center'>
            <Buttons Name="Apply Filter"/>
          </div>


          
          
         

         
        
      </Modal>

    </>
  )
}

export default FilterModal