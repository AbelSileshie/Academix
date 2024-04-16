// import { FaInstagram } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import {selectCurrentUser,} from "../../../Features/auth/authSlice";
  

// const ViewProfile = () => {
//     const user = useSelector(selectCurrentUser);
// //    console.log(user.is_staff)
//     return(
//         <div className='flex flex-col w-[100%] px-5 py-2 h-[450px] col-span-2 border-2 border-[#041643] shadow-blue-gray-200 rounded-lg   '>
//             <div className="flex items-center py-1">
//                 <p className='text-md w-[50%] text-[#041643] font-bold'>User Name</p>
//                 <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.username}</div>
//             </div>
//             <div className="flex items-center border-t py-5">
//                 <p className='text-md w-[50%] text-[#041643] font-bold'>ID</p>
//                 <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.student.student_id}</div>
//             </div>
//             <div className="flex items-center border-t py-1">
//             <p className='text-md w-[50%] text-[#041643] font-bold'>Email</p>
//                 <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.email}</div>
//             </div>
//             <div className="flex items-center border-t py-1">
//                 <p className='text-md w-[50%] text-[#041643] font-bold'>Department</p>
//                 <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.student.department}</div>
//             </div>
           
//             <div className="flex items-center border-t py-1">
//                 <p className='text-md w-[50%] text-[#041643] font-bold'>Year</p>
//                 <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.student.academic_year}</div>
//             </div>
//             <div className="flex items-center border-t py-5">
//                 <p className='text-md w-[50%] text-[#041643] font-bold'>Section</p>
//                 <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.student.section}</div>
//             </div>
            
      
//         </div>
//     )
// }

// export default ViewProfile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../../Features/auth/authSlice";

const ViewProfile = () => {
    const user = useSelector(selectCurrentUser);
    const Token = useSelector(selectCurrentToken); // Move this outside the useEffect

    const [name, setDepartmentName] = useState('');

    useEffect(() => {
        // Function to fetch department name based on user ID
        const fetchDepartmentName = async () => {
            try {
                const response = await axios.get(`http://54.237.124.13:8000/basicapp/departments/${user.student.department}`, {
                    headers: {
                        'Authorization': `Token ${Token}`
                    }
                });
                // Assuming the response data contains the department information as shown in your example
                setDepartmentName(response.data.name);
            } catch (error) {
                console.error('Error fetching department name:', error);
            }
        };

        // Call the fetchDepartmentName function when the component mounts
        fetchDepartmentName();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Token, user.student.department]); // Trigger the effect whenever the user's department ID changes

    if(user.student.section === 1){
        user.student.section = 'A';

    } else if(user.student.section === 2){
        user.student.section = 'B';

    }
    else if(user.student.section === 3){
        user.student.section = 'C';

    }
    else if(user.student.section === 4){
        user.student.section = 'D';

    }
    else if(user.student.section === 5){
        user.student.section = 'E';

    }

    return (
        <div className='flex flex-col w-[100%] px-5 py-2 h-[450px] col-span-2 border-2 border-[#041643] shadow-blue-gray-200 rounded-lg'>
            <div className="flex items-center py-1">
                <p className='text-md w-[50%] text-[#041643] font-bold'>User Name</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.username}</div>
            </div>
            <div className="flex items-center border-t py-5">
                <p className='text-md w-[50%] text-[#041643] font-bold'>ID</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.student.student_id}</div>
            </div>
            <div className="flex items-center border-t py-1">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Email</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.email}</div>
            </div>
            <div className="flex items-center border-t py-1">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Department</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{name}</div>
            </div>
            <div className="flex items-center border-t py-1">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Year</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>{user.student.academic_year}</div>
            </div>
            <div className="flex items-center border-t py-5">
                <p className='text-md w-[50%] text-[#041643] font-bold'>Section</p>
                <div className='w-full border-[#041643] h-[50px]  p-2 flex items-center text-[14px] text-gray-600 '>  {user.student.section}</div>
            </div>
        </div>
    );
};

export default ViewProfile;