import React from 'react'
import Recaptha from "../../Asset/Images/Socialicons/recaptha.svg"
import Location from "../../Asset/Images/Socialicons/location.svg"
import "../Modals/Modal.css"

const Signup = ({closeSignup}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='flex justify-center items-center'> 
      <h1 className='text-3xl font-bold'>Sign Up</h1>
    </div>
    <div className='mt-16 md:mt-5'>
      <p className='font-medium text-xl'>Full Name<span className='text-[#FF0000]'>*</span></p>
      <input type="text" className='bg-[#F5F5F5] px-5 py-2 w-96 rounded-lg outline-none ' placeholder='Enter Your Full Name' />
    </div>
    <div className='my-3 '>
      <p className='font-medium text-xl'>Email Address<span className='text-[#FF0000]'>*</span></p>
      <input type="text" className='bg-[#F5F5F5] px-5 py-2 w-96 rounded-lg outline-none ' placeholder='Enter Email Address' />
      <p className='text-xs'>We'll use your email address to send you updates</p>
    </div>
    <div className='my-3 '>
      <p className='font-medium text-xl'>Password<span className='text-[#FF0000]'>*</span></p>
      <input type="text" className='bg-[#F5F5F5] px-5 py-2 w-96 rounded-lg outline-none ' placeholder='Enter Password' />
    </div>
    <div className='my-3 '>
      <p className='font-medium text-xl'>Location<span className='text-[#FF0000]'>*</span></p>
      <div className='flex items-center'>
      <img src={Location} className='absolute z-10 pl-3' />
      <input type="text" id='country' className='relative bg-[#F5F5F5] px-10 py-2 w-96 rounded-lg outline-none ' placeholder='Karachi, PK' />
      </div>
      <p className='text-xs'>We'll use your location to show Meetup events near you.</p>
    </div>
    <div className='my-3 w-96'>
    <p className='font-medium text-xl'>Age<span className='text-[#FF0000]'>*</span></p>
      <div className='flex justify-start items-center gap-3'>
      <input type="checkbox" className='h-4 w-4 accent-[#023D65]'/>
      <p>I am 18 years of age or older.</p>
      </div>
    </div>
    <div className='flex justify-between items-center gap-2 border outline-none shadow-md  px-5 py-4 w-96 rounded-lg'>
      <div className='flex gap-3'>
      <input type="checkbox" className='h-4 w-4 accent-[#023D65]'/>
        <p className='text-xs font-bold'>I'm not a robot</p>
      </div>
        <img src={Recaptha}  />
    </div>
    <div className='my-5'>
    <button className='text-white mt-5 font-semibold bg-[#023D65] rounded-lg px-5 py-3 w-96'>Sign Up</button>
    </div>

    <div className='flex flex-col justify-center items-center'>
      <p>By signing up, you agree to <span className='underline cursor-pointer text-[#1492E6]'>Terms of Service,</span></p>
      <p><span className='underline cursor-pointer text-[#1492E6]'>Privacy Policy,</span> and <span className='underline cursor-pointer text-[#1492E6]'>Cookie Policy,</span></p>
    </div>

    <div className='flex justify-center items-center gap-2'>
    <p className='text-lg text-[#505050]'>Not a member yet?</p>
    <button onClick={closeSignup} className='text-lg font-bold text-[#023D65]'>Login</button>
    </div>
   
    
    
    </div>
  )
}

export default Signup