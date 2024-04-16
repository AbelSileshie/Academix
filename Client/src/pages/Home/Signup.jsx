import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../../component/Home/Navigation";
import { toast } from "react-toastify";


const SignUp = () => {
  // State variables to store form data and department options
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    student_id: "",
    academic_year: "",
    telegram: "",
    instagram: "",
    linkedin: "",
    password: "",

    department: 1, // Add department_id to store the selected department ID
    gender: "", // Add gender field
    section: "",
  });
  const [departmentOptions, setDepartmentOptions] = useState([]); // State variable to store department options

  // Function to fetch department options from the API
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://54.237.124.13:8000/basicapp/departments"
        );
        setDepartmentOptions(response.data.department);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to the API endpoint with form data
    try {
      const response = await axios.post(
        "http://54.237.124.13:8000/user/",
        formData
      );
      console.log("User created:", response.data);
      // Optionally, you can redirect the user or show a success message
      toast.success("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Plase cheack your Rom or the user is Exist.");
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
          {/* Signup form */}
          <h2 className="text-3xl text-center text-gray-900 mb-6">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded required"
              name="first_name"
              placeholder="First Name"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="last_name"
              placeholder="Last Name"
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="username"
              placeholder="username"
              onChange={handleInputChange}
            />
            <input
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="phone_number"
              placeholder="Phone Number"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="student_id"
              placeholder="Student ID"
              onChange={handleInputChange}
            />
            <input
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="academic_year"
              placeholder="Academic Year"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="telegram"
              placeholder="@telegExample"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="instagram"
              placeholder="@instExample"
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="linkedin"
              placeholder="linkedin_Example"
              onChange={handleInputChange}
            />
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            {/* section driodown */}
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="section"
              onChange={handleInputChange}
              value={formData.section}
            >
              <option value="">Select section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>

            {/* Department dropdown */}
            <div className="relative">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded"
                name="department"
                onChange={handleInputChange}
                value={formData.department}
              >
                <option value="">Select Department</option>
                {departmentOptions.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 0a9.997 9.997 0 00-7.071 2.929A9.997 9.997 0 000 10c0 2.683 1.059 5.207 2.929 7.071A9.997 9.997 0 0010 20c2.683 0 5.207-1.059 7.071-2.929A9.997 9.997 0 0020 10c0-2.683-1.059-5.207-2.929-7.071A9.997 9.997 0 0010 0zM2.929 12.929a7.963 7.963 0 000-5.657A7.963 7.963 0 017.071 4.93a7.963 7.963 0 015.657 0 7.963 7.963 0 010 5.657 7.963 7.963 0 01-5.657 2.829 7.963 7.963 0 01-5.657 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* Gender dropdown */}
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded"
              name="gender"
              onChange={handleInputChange}
              value={formData.gender}
            >
              <option value="">Select Gender</option>
              <option value="f">Female</option>
              <option value="m">Male</option>
            </select>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
