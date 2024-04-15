import React from "react";
import { Router, Route, Routes, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentToken,
} from "./Features/auth/authSlice.js";
// Imported The Landing Page Routes
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
import Navigation from "./component/Home/Navigation";
import Footer from "./component/General/Footer";
import User from "./component/Admin/users/User.jsx";
// import Studentdashboard from "./component/Student/Dashboard/Studentdashboard.jsx";
//Imported Admin Routes
import AdminDashboard from "./component/Admin/dashboard/Home";
import Department from "./component/Admin/Departmet/Department.jsx";
import Admin_General_post from "./component/Admin/General-post/Gpost.jsx";
import Staff from "./component/Admin/Staff/Staff";
import StudentList from "./component/Admin/users/User.jsx";
import AdminEvent from "./component/Admin/Event/Events";
import AdminCources from "./component/Admin/Cources/Cources.jsx";
// Imported Student Routes
import StudentDashboard from "./component/Student/Dashboard/Home";
import Event_Post from "./component/Student/View-Post/Event-post/Gpost";
import General_post from "./component/Student/View-Post/General-post/Gpost.jsx";
import Club from "./component/Student/Club/Club.jsx";
import Club_Post from "./component/Student/View-Post/Club-Post/Gpost";
import Student_Section from "./component/Student/View-Post/Rep-Post/Gpost";
import StudentCources from "./component/Student/Cources/Cources";
import StudentProfile from "./component/Student/Profile/StudentProfile.jsx";
import EditProfile from "./component/Student/Profile/EditProfile.jsx";
import Chat from "./component/Student/AI-Chat/AI.jsx";
// Imported Rep Routes

// Imported Club Owner Routes

// Imported Route Protection
import Redirector from "./component/General/Redirector";
import { ToastContainer } from "react-toastify";

function App() {
  const user = useSelector(selectCurrentUser);
  const isStaff = user?.is_staff;

  return (
    <div className="">
      <main></main>
      <Routes>
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/Chat" element={<Chat />} />
        <Route index element={<Home />} />
        <Route index element={<Signup />} />
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Redirector" element={<Redirector />} />
        <Route path="Admin" element={<AdminDashboard />} />
        <Route path="Department" element={<Department />} />
        <Route path="Admin_General_post" element={<Admin_General_post />} />
        <Route path="Staff" element={<Staff />} />
        <Route path="StudentList" element={<StudentList />} />
        <Route path="AdminEvent" element={<AdminEvent />} />
        <Route path="Student" element={<StudentDashboard />} />
        <Route path="StEvent" element={<Event_Post />} />
        <Route path="General" element={<General_post />} />
        <Route path="Club" element={<Club />} />
        <Route path="Club_Post" element={<Club_Post />} />
        <Route path="Section" element={<Student_Section />} />
        <Route path="Stcources" element={<StudentCources />} />
        <Route path="Profile" element={<StudentProfile />} />
        <Route path="AdminCources" element={<AdminCources />} />
        <Route path="StudentEditProfile" element={<EditProfile />} />
      </Routes>
      <ToastContainer theme="dark" />
      {/* <footer className="">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
