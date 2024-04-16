// import { FaInstagram } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import {selectCurrentUser,} from "../../../Features/auth/authSlice";

// const EditSocials = () => {
//     const [randomUser, setRandomUser] = useState(null);

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => {
//                 const randomUserIndex = Math.floor(Math.random() * users.length);
//                 setRandomUser(users[randomUserIndex]);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);
//     const user = useSelector(selectCurrentUser);
//     return(
//                 <div className='flex flex-col w-[100%] p-5 gap-5 col-span-2'>
//                 <div>
//                     <p className='text-sm text-[#041643] font-bold'>Telegram</p>
//                     <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
//                         {/* Replace with the appropriate icon */}
//                         <FaTelegramPlane className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
//                         <input className='w-full flex-grow h-full px-2' value={randomUser ? randomUser.username : ''} />
//                     </div>
//                 </div>

//                 <div>
//                     <p className='text-sm text-[#041643] font-bold'>Instagram</p>
//                     <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
//                         {/* Replace with the appropriate icon */}
//                         <FaInstagram className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
//                         <input className='w-full flex-grow h-full px-2' value={randomUser ? randomUser.username : ''} />
//                     </div>
//                 </div>
                
//                 <div>
//                     <p className='text-sm text-[#041643] font-bold'>Twitter</p>
//                     <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
//                         {/* Replace with the appropriate icon */}
//                         <BsTwitterX className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
//                         <input className='w-full flex-grow h-full px-2' value={randomUser ? randomUser.username : ''} />
//                     </div>
//                 </div>
//             </div>

//     )
// }

// export default EditSocials;



// import { FaInstagram } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

// const EditSocials = () => {
//     return(
//         <div className='flex flex-col w-[100%] p-5 gap-5 col-span-2'>
//             <div>
//                 <p className='text-sm text-[#041643] font-bold'>Telegram</p>
//                 <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
//                     <FaTelegramPlane className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
//                     <input className='w-full flex-grow h-full px-2' />
//                 </div>
//             </div>

//             <div>
//                 <p className='text-sm text-[#041643] font-bold'>Instagram</p>
//                 <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
//                     <FaInstagram className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
//                     <input className='w-full flex-grow h-full px-2' />
//                 </div>
//             </div>
//             <div>
//                 <p className='text-sm text-[#041643] font-bold'>Twitter</p>
//                 <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
//                     <BsTwitterX className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
//                     <input className='w-full flex-grow h-full px-2' />
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default EditSocials;

import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../../Features/auth/authSlice";
import axios from 'axios'; // Import Axios
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const EditSocials = ({ userId }) => {
    const Token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser)

    // Initialize state variables to hold the social media data
    const [telegram, setTelegram] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setlinkedin] = useState('');

    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://54.237.124.13:8000/user/${user.id}`, {
                telegram,
                instagram,
                linkedin
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${Token}`
                }
            });
            
            console.log('Response:', response.data); // Log the response data

            // Handle success scenario, e.g., display a success message
            console.log('Social media profiles updated successfully');
        } catch (error) {
            // Handle error scenario, e.g., display an error message
            console.error('Error updating social media profiles:', error);
        }
    };

    return (
        <div className='flex flex-col w-[100%] p-5 gap-5 col-span-2'>
            <div>
                <p className='text-sm text-[#041643] font-bold'>Telegram</p>
                <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
                    <FaTelegramPlane className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
                    <input 
                        className='w-full flex-grow h-full px-2'
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <p className='text-sm text-[#041643] font-bold'>Instagram</p>
                <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
                    <FaInstagram className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
                    <input 
                        className='w-full flex-grow h-full px-2'
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                </div>
            </div>
            
            <div>
                <p className='text-sm text-[#041643] font-bold'>Linkedin</p>
                <div className="flex items-center border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200">
                    <BsTwitterX className="ml-2 pr-2 w-[30px] h-[30px] border-r-2" />
                    <input 
                        className='w-full flex-grow h-full px-2'
                        value={linkedin}
                        onChange={(e) => setlinkedin(e.target.value)}
                    />
                </div>
            </div>

            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Update Social Media Profiles
            </button>
        </div>
    );
};

export default EditSocials;