import React, { useEffect, useState, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import Menu from "./Menu";
import Login from "../../pages/Home/Login.jsx";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const Navigate = useNavigate();

  const [navBarActive, setNavBarActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [loginDropdownActive, setLoginDropdownActive] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const curY = window.scrollY;
      setNavBarActive(curY >= 100);
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLoginDropdownActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleLoginDropdown = () => {
    setLoginDropdownActive(!loginDropdownActive);
  };

  return (
    <div className={`${menuActive ? "grid-row-2 h-auto" : "grid-row-1"}`}>
      <div
        className={`fixed top-0 left-0 w-full z-50 py- md:py-0 ${
          !navBarActive && menuActive
            ? "bg-slate-100/30 backdrop-blur-sm"
            : navBarActive && !menuActive
            ? "bg-slate-100/30 backdrop-blur-sm"
            : navBarActive && menuActive
            ? "bg-slate-100/30 backdrop-blur-sm"
            : "transparent "
        } grid grid-cols-2 lg:grid-cols-3 p-1  justify-evenly shadow-md`}
      >
        <div className="flex items-center justify-start lg:justify-center ">
          <img
            src="/images/Academix_Logo.png"
            alt="Logo"
            className="w-[25px] lg:w-[70px]"
          />
        </div>
        <div
          className={`list-none hidden lg:flex gap-10 justify-center font-semibold text-[18px] items-center text-gray-700`}
        >
          <a href="">
            <li className="p-2 text-gray-400 font-extrabold">Home</li>
          </a>
          <a href="">
            <li className="p-2 text-gray-400 font-extrabold">About Us</li>
          </a>
        </div>
        <div className="  hidden lg:flex lg:justify-end items-center">
          <button
            className="py-[5px] px-[24px] h-[40px] m-3 rounded-[8px] text-[18px] bg-[#041643] text-white"
            onClick={() => Navigate("/Signup")}
          >
            Signup
          </button>
          <button
            onClick={() => Navigate("/Login")}
            className="py-[5px] px-[24px] h-[40px] m-3 rounded-[8px] text-[18px] border border-[#041643] text-gray-300"
          >
            Login
          </button>
        </div>
        <div className="flex lg:hidden justify-end items-center">
          <CiMenuFries
            className="text-[30px] text-[#2195F3]"
            onClick={showMenu}
          />
        </div>
        <div
          className={`col-span-2 ${
            menuActive ? "block lg:hidden" : "hidden "
          } `}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
