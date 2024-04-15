import { useState } from "react";


const EditBio = () => {
    const [bio, setBio] = useState('');

    const handleChange = (e) => {
      const text = e.target.value;
      setBio(text);
    };
  
    return (
      <div className='flex flex-col w-[100%] p-5 gap-5 col-span-2'>
        <div>
          <p className='text-sm text-[#041643] font-bold'>
            Input a Bio not more than 250 characters:
          </p>
          <textarea
            className='w-full border border-solid border-[#041643] rounded-md h-[200px] shadow-sm shadow-blue-gray-200 p-2 resize-none'
            maxLength={250}
            value={bio}
            onChange={handleChange}
          />
          <p className="text-gray-600">
            Characters remaining: {250 - bio.length}
          </p>
        </div>
      </div>
    );
  }

export default EditBio;