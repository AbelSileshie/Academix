import React, { useEffect, useState } from "react";
import PostService from "./PostService.js";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../Features/auth/authSlice.js";

// import { IoMdTime } from "react-icons/fi";
import TrendingPosts from "./TrendingPosts.jsx";
import Sidebar from "./Sidebar.jsx";
import allCourses from "./AllCourses.json";
import courseData from "./Courses.json"; // Import the course data from a dummy JSON file
import tw from "tailwind-styled-components";
import { useSelect } from "@material-tailwind/react";

const StudentDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await PostService.getLatestPosts();
      setPosts(posts);
    };

    // Simulating API call to fetch courses
    setCourses(courseData);

    fetchPosts();
  }, []);

  const [showSemesterCourses, setShowSemesterCourses] = useState(true);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleToggleSemesterCourses = () => {
    setShowSemesterCourses(true);
    setShowAllCourses(false);
  };

  const handleToggleAllCourses = () => {
    setShowSemesterCourses(false);
    setShowAllCourses(true);
  };

  const coursesToShow = showSemesterCourses ? courses : allCourses;
  const user = useSelector(selectCurrentUser);
  return (
    <div className="bg-gray-200 pt-10 px-1 md:px-5 ">
      <div className="flex items-right mb-2 "></div>
      <div className="flex">
        <div className="flex-1 m-5 md-5 ">
          <div className="bg-white p-5 md:p-10 rounded-[20px] shadow-md mb-4 w-auto h-[200px] relative">
            <p className="text-[20px] md:text-[32px] font-bold">
              Welcome {user.first_name}
            </p>
            <p className="text-gray-600 text-[13px] md:text-[20px]">
              Welcome to your Dashboard
            </p>
            <img
              src="./images/WavingMan.png"
              alt="wavingMan"
              className="w-[200px] h-[280px] absolute bottom-0 right-[-40px] md:right-5"
            />
          </div>
          <TrendingPosts />
          <div className="mt-4">
            <h3 className="text-[20px] font-extrabold mb-4">My Courses</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <h4
                className={`text-[13px] md:text-[20px] font-extrabold mb-4 ${
                  showSemesterCourses ? "text-blue-600" : "text-gray-600"
                } cursor-pointer`}
                onClick={handleToggleSemesterCourses}
              >
                Semester Courses
              </h4>
              <h4
                className={`text-[13px] md:text-[20px] font-extrabold mb-4 ${
                  showSemesterCourses ? "text-gray-600" : "text-blue-600"
                } cursor-pointer`}
                onClick={handleToggleAllCourses}
              >
                All Courses
              </h4>
            </div>
            <div className="h-[500px] overflow-x-auto">
              {coursesToShow.map((course) => (
                <div
                  key={course.id}
                  className="flex bg-white p-4 rounded-lg shadow-md mb-4 justify-between items-center"
                >
                  <div className="grid grid-cols-2 gap-2 md:gap-20 justify-center items-center">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
                      <p className="text-sm lg:text-lg font-bold">
                        {course.code}
                      </p>
                      <p className="text-xs lg:text-lg font-bold text-gray-800 w-full md:w-[300px]">
                        {course.title}
                      </p>
                    </div>
                    <p className="text-sm lg:text-lg font-bold text-gray-800 text-center">
                      CHR - {course.chr}
                    </p>
                  </div>
                  <button className="bg-[#1352F1] w-[180px] lg:h-[50px] h-[30px] text-xs lg:text-lg text-white px-2 md:px-4 py-1 lg:py-2 rounded-lg">
                    View Course
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[30px] shadow-md mt-4 hidden xl:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
