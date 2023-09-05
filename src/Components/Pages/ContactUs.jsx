import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div className='bg-[#F6F5F7] px-5 py-5 md:px-32 md:py-10'>
        <div className="bg-white rounded-lg px-5 py-5 md:px-0 md:py-0 md:flex justify-center items-center ">
            <div className='md:py-10 md:w-[500px]'>

            <h1 className='text-3xl font-bold md:my-10 md:text-4xl'>What can we do for you?</h1>
            <div className='my-2 md:my-5'>  
            <p className='font-medium md:text-xl md:py-2'>Full Name</p>
            <input type="text" className='bg-[#F5F5F5] px-5 py-2 w-full rounded-lg outline-none md:py-3' placeholder='Name' />
            </div>
            <div className='my-2 md:my-5'>  
            <p className='font-medium'>Email Address</p>
            <input type="text" className='bg-[#F5F5F5] px-5 py-2 w-full rounded-lg outline-none md:py-3' placeholder='Enter your email address' />
            </div>
            <div className='my-2 md:my-5'>  
            <p className='font-medium'>How can we help?</p>
                <textarea rows="4" cols="50" className='bg-[#F5F5F5] px-5 py-2 w-full rounded-lg outline-none md:py-3' placeholder='Enter Your Message' />
            </div>
            <button className='text-white mt-5 font-semibold bg-[#023D65] rounded-lg px-5 py-3 w-full'>Submit</button>

            </div>
           
        </div>
    </div>
    </>
  )
}

export default ContactUs