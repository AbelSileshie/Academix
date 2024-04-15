import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../../../Features/auth/authSlice";
import axios from 'axios'; // Import Axios
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const EditProfile = ({ userId }) => {
    const Token = useSelector(selectCurrentToken);
    const user = useSelector(selectCurrentUser)

    // Initialize state variables to hold the form data
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [academic_year, setYear] = useState('');
    const [section, setSection] = useState('');
    const [telegram, setTelegram] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');

    // Function to handle form submission for both profile and social media updates
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://54.237.124.13:8000/user/${user.id}`, {
                username,
                email,
                department,
                academic_year,
                section,
                telegram,
                instagram,
                linkedin
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${Token}`
                }
            });
            console.log(username,email,department,academic_year,section,telegram,instagram,linkedin)
            console.log('Response:', response.data); // Log the response data

            // Handle success scenario, e.g., display a success message
            console.log('Profile and social media profiles updated successfully');
        } catch (error) {
            // Handle error scenario, e.g., display an error message
            console.error('Error updating profile and social media profiles:', error);
        }
    };

    return (
        <div className='flex flex-col w-[100%] p-5 gap-5 col-span-2'>
            <div>
                <p className='text-sm text-[#041643] font-bold'>User Name</p>
                <input
                    className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <p className='text-sm text-[#041643] font-bold'>Email</p>
                <input
                    className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <p className='text-sm text-[#041643] font-bold'>Department</p>
                <input
                    className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center'
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </div>
            <div className="flex gap-5">
                <div className="w-full">
                    <p className='text-sm text-[#041643] font-bold'>Year</p>
                    <input
                        className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center'
                        value={academic_year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="w-full">
                    <p className='text-sm text-[#041643] font-bold'>Section</p>
                    <input
                        className='w-full border border-solid border-[#041643] rounded-md h-[50px] shadow-sm shadow-blue-gray-200 p-2 flex items-center'
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                    />
                </div>
            </div>

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
                        onChange={(e) => setLinkedin(e.target.value)}
                    />
                </div>
            </div>

            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Update Profile and Social Media Profiles
            </button>
        </div>
    );
};

export default EditProfile;