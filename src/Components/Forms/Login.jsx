import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import {BiSolidLock} from 'react-icons/bi'
import Google from "../../Asset/Images/Socialicons/google.svg"
import Apple from "../../Asset/Images/Socialicons/Apple.svg"
import Facebook from "../../Asset/Images/Socialicons/facebook.svg"

const Login = ({openSecondModal}) => {
  return (
    <>
    
    <div className='flex justify-center items-center py-14'>
        <h2 className='text-3xl font-bold'>Login</h2>
        </div>

        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex items-center'> 
            <FaEnvelope style={{color: '#023D65', fontSize: '20px', fontWeight: '' }} className='absolute z-10 ml-3'/>
                <input type="text" className='relative bg-[#F5F5F5] px-12 py-2 w-96 rounded-lg outline-none ' placeholder='example@email.com' />
            </div>
            <div className='flex items-center'>
            <BiSolidLock style={{color: '#023D65', fontSize: '20px', fontWeight: '' }} className='absolute z-10 ml-3'/>
                <input type="text" className='relative bg-[#F5F5F5] px-12 py-2 w-96 rounded-lg outline-none ' placeholder='Password' />
            </div>

            <div className='flex flex-row gap-32'>
              <div className='flex flex-row justify-center items-center gap-2'>
                <input type="checkbox" name="" id="" className='h-4 w-4'/>
                <p className='font-medium'>Remember Me</p>
              </div>
                <p className='text-[#1492E6] font-medium'>Forget Password</p>
            </div>

            <button className='text-white mt-5 font-semibold bg-[#023D65] rounded-lg px-5 py-3 w-96'>Login</button>

            <div className='flex justify-around items-center gap-5'>
              <div className='w-40 border-[#023D65] border-b-[1px] rounded-xl'></div>
              <p>or</p>
              <div className='w-40 border-[#023D65] border-b-[1px] rounded-xl'></div>
            </div>

            <div className='flex flex-col justify-center items-center gap-5'>
              <div className='flex border rounded-lg gap-5 w-96 py-3 px-10 shadow-md '>
                <img src={Google} />
                <button className='font-medium'>Sign Up with Google</button>
                </div>
              <div className='flex border rounded-lg gap-5 w-96 py-3 px-10 shadow-md '>
                <img src={Facebook} />
                <button className='font-medium'>Log in With Facebook</button>
              </div>
              <div className='flex border rounded-lg gap-5 w-96 py-3 px-10 shadow-md '>
                <img src={Apple} />
                <button className='font-medium'>Log in With Apple</button>
              </div>


              <div className='flex justify-center items-center gap-2 mt-10'>
                <p className='text-xl'>Not a member yet?</p>
                <button onClick={openSecondModal} className='underline text-xl font-bold text-[#023D65]'>Sign up</button>
              </div>


            </div>
            
          
        </div>
    </>
  )
}

export default Login