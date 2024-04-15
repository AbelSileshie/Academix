import React, { useState } from 'react';
import { FiCalendar, FiBookOpen, FiUsers } from 'react-icons/fi';
import 'tailwindcss/tailwind.css';
import { CiPen } from "react-icons/ci";
import Cards from './Cards';
import Footer from './Footer';

const ModeratorApplication = () => {
  const [hoverActive, setHoverActive] = useState(true);

  const handleHoverAndClick = () => {
    setHoverActive(!hoverActive);
  };
  return (

    <div className="bg-white p-4 rounded-lg shadow-xl ">
      <div className='text-center mb-6 flex flex-col justify-center items-center my-20'>
        <p className="text-4xl font-bold">Features <br/> </p>
        <p className="text-gray-600 mt-2 w-[50%]">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum tempora illo laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum tempora illo laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum</p>  
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-20">
      <Cards icon={<CiPen className='w-[60px] h-[60px]' />} title={'Custom Dashboard'} data={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...'}/>
        <Cards icon={<FiBookOpen className='w-[55px] h-[55px]'/>} title={'Class Schedule'} data={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...'}/>
        <Cards icon={<FiCalendar className='w-[55px] h-[55px]' />} title={'Academic Calendar'} data={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...'}/>
        {/* <Cards icon={<FiBookOpen/>} title={'Academic Calendar'} data={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora illo laborum ex cupiditate...'}/> */}
      </div>
 
          <div className='flex flex-col md:flex-row mb-10'>
            <div className='flex flex-col justify-center items-center w-[80%]'>
                <h2 className="text-2xl font-bold text-gray-800">
                Become A Moderator for our platform
              </h2>
              <p className="text-gray-600 mt-2 w-[70%]">
                As a moderator, you will play a crucial role in maintaining a safe and engaging environment for our users. Your responsibilities will include monitoring and enforcing guidelines, fostering positive discussions, and ensuring a friendly community atmosphere. By becoming a moderator, you will have the opportunity to make a meaningful impact and contribute to the growth and success of our platform.
              </p>
            <button className='py-[14px] px-[24px] m-3 rounded-[8px] text-[18px] bg-[#041643] text-white'>Apply Now</button>

            </div>
            <div>
              <img src="https://source.unsplash.com/random/800x600?student,studying,sig=2" alt="" />
            </div>
          </div>

           <div className='flex flex-col md:flex-row mb-20'>
            <div>
              <img src="https://source.unsplash.com/random/800x600?student,studying,sig=1" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center w-[80%]'>
                <h2 className="text-2xl font-bold text-gray-800">
                Become A Moderator for our platform
              </h2>
              <p className="text-gray-600 mt-2 w-[70%]">
                As a moderator, you will play a crucial role in maintaining a safe and engaging environment for our users. Your responsibilities will include monitoring and enforcing guidelines, fostering positive discussions, and ensuring a friendly community atmosphere. By becoming a moderator, you will have the opportunity to make a meaningful impact and contribute to the growth and success of our platform.
              </p>
            <button className='py-[14px] px-[24px] m-3 rounded-[8px] text-[18px] bg-[#041643] text-white'>Apply Now</button>

            </div>
          </div>
          <Footer/>
    </div>
  );
};

export default ModeratorApplication;
