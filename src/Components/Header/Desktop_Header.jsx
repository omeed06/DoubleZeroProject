import React,{useState} from 'react'
import { BiSearch } from "react-icons/bi";
import Mobile_logo from "../../Asset/Images/Mobile-logo.svg"
import Modals from '../Modals/Modals';
import "../Modals/Modal.css"


const Desktop_Header = () => {


const [desktopModal,setDesktopModal]=useState(false)

const openDesktopModal = () => {
  setDesktopModal(true);
}

const closeDesktopModal = () => {
  setDesktopModal(false);
}




  return (
    <div className='bg-[#023D65] px-2 md:flex flex-row justify-between items-center md:px-14 py-5'>
    <div className='ml-10 pb-3 sm:ml-0 sm:pb-0 flex gap-5 flex-row items-center'>
        <img src={Mobile_logo} style={{width: "100px"}} alt="" />
      <div className='flex items-center'>
        <BiSearch style={{color: 'white', fontSize: '20px', fontWeight: '' }} className='absolute z-10 m-2'/>
        <input type="text" className='relative bg-[#023354] px-10 py-1 w-72 rounded-lg outline-none text-white' placeholder='Search for "New Events" ' />
       </div>
    
    </div>
    <div className='flex flex-row justify-between items-center px-10 gap-5'>
      <p className='text-white'>Venus</p>
      <p className='text-white'>Events</p>
      <p className='text-white'>Stories</p>
      <button onClick={openDesktopModal} className='text-[#023D65] font-bold bg-white rounded-lg px-5 py-1'>Login</button>
      {desktopModal && <Modals open={openDesktopModal} closeModal={closeDesktopModal} />}
    </div>
  </div>
  )
}

export default Desktop_Header