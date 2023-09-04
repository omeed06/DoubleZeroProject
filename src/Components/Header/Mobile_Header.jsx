import React, {useState} from 'react'
import {CgProfile} from "react-icons/cg";
import {AiOutlineMenu} from "react-icons/ai"
import Mobile_logo from "../../Asset/Images/Mobile-logo.svg"
import { BiSearch } from "react-icons/bi";
import Modals from '../Modals/Modals';

const Mobile_Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  const [showMenu1, setShowMenu1] = useState(true);
  const [showMenu2, setShowMenu2] = useState(false);


  const handleClick = () => {
    setShowMenu1(!showMenu1);
    setShowMenu2(!showMenu2);
  };


  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <>

{showMenu1 && (
    
    <div className='bg-[#023D65] flex justify-between items-center px-5 py-5'>
        <CgProfile style={{color: 'white', fontSize: '30px', fontWeight: '' }}/>
        <a href='/'>
        <img src={Mobile_logo} style={{width: "101px"}} alt="" />
        </a>
        
      <div className='flex justify-center items-center gap-4'>
          <div className='flex justify-center items-center'>
            <BiSearch style={{color: 'white', fontSize: '20px', fontWeight: '' }} className='absolute z-10 '/>
            <input type="text" className='hidden md:block relative bg-[#023354] px-10 py-1 w-72 rounded-lg outline-none text-white' placeholder='Search for "New Events" ' />
          </div>
        
          <AiOutlineMenu onClick={handleClick} style={{color: 'white', fontSize: '20px', fontWeight: '', cursor: "pointer" }}/>
      </div>
     
    </div>
  )}

{showMenu2 && (
           <div className='bg-[#023D65] px-5 py-5'>
            <div className='flex justify-between'> 
            <a href='/'>
             <img src={Mobile_logo} style={{width: "101px"}} alt="" />
             </a>
            <AiOutlineMenu onClick={handleClick} style={{color: 'white', fontSize: '20px', fontWeight: '', cursor: "pointer" }}/>
            </div>
           
           <div className='flex flex-col mt-10 gap-3'>
            <p className='text-white'>Venus</p>
            <div className=" w-full border-slate-400 border-b-[1px] rounded-xl "></div>
            <p className='text-white'>Events</p>
            <div className=" w-full border-slate-400 border-b-[1px] rounded-xl "></div>
            <p className='text-white'>Stories</p>
            <button onClick={openModal} className='text-[#023D65] mt-10 font-bold bg-white rounded-lg px-5 py-2'>Login</button>
            {isOpen && (<Modals open={isOpen} closeModal={closeModal} />)}
           
           </div>
        </div>
      )}
     
    
    </>
  )
}

export default Mobile_Header