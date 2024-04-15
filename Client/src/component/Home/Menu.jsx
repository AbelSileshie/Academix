import React, { useRef, useState } from 'react'
const Menu = () => {
  const [loginDropdownActive, setLoginDropdownActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLoginDropdownActive(false);
    }
};

  const toggleLoginDropdown = () => {
    setLoginDropdownActive(!loginDropdownActive);
};
  return (
    <div className='grid grid-row-4 gap-1 w-full h-[300px] text-slate-500 bg-white bg-opacity-90'>
        <div className='p-5 w-full text-md border-b font-semibold'>
            <a href=""><p>Home</p></a>
        </div>
        <div className='p-5 w-full text-md border-b font-semibold'>
          <a href=""><p>Discover Talent</p></a>
        </div>
        <div className='p-5 w-full text-md border-b font-semibold'>
          <a href=""><p>About Us</p></a>
        </div>
        <button className='py-[14px] px-[24px] m-3 rounded-[8px] text-[18px] border border-[#2195F3] text-[#2195F3]' onClick={toggleLoginDropdown}>Login</button>
          {loginDropdownActive && (
              <div ref={dropdownRef} className='absolute top-full mt-2 right-0 w-[300px] bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg'>
                  <a href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Create Account</a>
                  <a href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Freelancer</a>
                  <a href='' className=' block px-4 py-5 text-[18px] text-gray-700 hover:bg-blue-50 hover:text-[#2195F3] '>Developer</a>
              </div>
          )}
    </div>
  )
}

export default Menu