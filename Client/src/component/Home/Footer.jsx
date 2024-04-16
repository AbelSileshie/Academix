import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='relative flex flex-col h-[300px] items-center justify-end px-10 md:px-36 bg-[#041643]'>
      <div className='flex xl:flex-row flex-col border-b-4 border-slate-200 md:p-10 gap-[400px]'>
            <div className='text-sm text-slate-500 flex flex-col justify-center'>
              <img src="/images/Academix_Logo.png" alt="" className='w-[100px] '/>
              <div className='text-white  text-[20px] flex justify-center lg:justify-start'>
                <FaLinkedinIn className='mr-3'/>
                <FaXTwitter className='mr-3'/>
                <FaYoutube className='mr-3'/>
                <FaInstagram className='mr-3'/>
              </div>
            </div>
            <div className='h-full w-full  grid grid-cols-3 gap-10 items-start justify-start'>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5'>
                <p className='font-semibold text-lg mb-3 text-white'>Company</p>
                <li className='my-2 text-white text-14 lg:text-[16px] font-normal'><a href="/page">Home </a></li>
                <li className='my-2 text-white text-14 lg:text-[16px] font-normal'><a href="/page">About Us</a></li>
              </div>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5 '>
                <p className='font-semibold text-lg mb-3 text-white'>Community</p>
                <li className='my-2 text-white text-14 lg:text-[16px] font-normal'><a href="/page">academix.org </a></li>
              </div>
              <div className='text-sm text-slate-900 font-medium list-none flex-col justify-start my-5 '>
                <p className='font-semibold text-lg mb-3 text-white'>Contact Us</p>
                <li className='my-2 text-white text-14 lg:text-[16px] font-normal'><a href="/page">+251912345678 </a></li>
                <li className='my-2 text-white text-14 lg:text-[16px] font-normal'><a href="/page">academix.org</a></li>
              </div>
            </div>
        </div>
        <div className='lg:flex justify-center items-center hidden h-[25%] w-full  text-white'>
          <p>Copyright</p>
        </div>
 
    </div>
  )
}

export default Footer