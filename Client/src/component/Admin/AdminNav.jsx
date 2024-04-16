import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../Features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  BellIcon,
  HashtagIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@iconicicons/react";
import ArrowLeftEndOnRectangleIcon from "@heroicons/react/24/solid/ArrowLeftEndOnRectangleIcon";
import CalandarDaysIcon from "@heroicons/react/24/solid/CalendarDaysIcon";
import { MdSpaceDashboard } from "react-icons/md";
import AcademicCapIcon from "@heroicons/react/24/outline/AcademicCapIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";

const AdminNav = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    Navigate("/Login");
  };
  const [open, setOpen] = useState(true);
  return (
    <nav>
      <div className="flex ">
        <div
          className={` ${
            open ? "w-60 h-full" : "w-20 h-full"
          } bg-[#041643] h-screen p-5  pt-8 relative duration-300`}
        >
          <ChevronLeftIcon
            className={` bg-white absolute cursor-pointer right-1 top-9 w-7 border-white
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex gap-x-4 items-center place-content-center">
            <h1
              className={`text-white origin-left font-extrabold text-xl duration-200 font-sans ${
                !open && "scale-0"
              }`}
            >
              ACADEMIX Admin
            </h1>
          </div>
          <ul className="pt-6">
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/Admin")}
            >
              <MdSpaceDashboard class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Dashboard
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/Department")}
            >
              <AcademicCapIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Department
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/StudentList")}
            >
              <UserIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Student Information
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/Staff")}
            >
              <UserGroupIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Staff
              </span>
            </li>{" "}
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/Admin_General_post")}
            >
              <HashtagIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                General Post
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/AdminEvent")}
            >
              <CalandarDaysIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Requests
              </span>
            </li>
            <li className="flex absolute bottom-0 mb-5 rounded-md p-2 cursor-pointer hover:bg-white hover:text-neutral-800 font-semibold leading-3  text-[#AFAFAF] text-sm items-center">
              <ArrowLeftEndOnRectangleIcon
                class="h-6 w-6 hover:text-blue-600 text-zinc-400 rotate-180"
                onClick={() => handleLogout()}
              />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
                onClick={() => handleLogout()}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default AdminNav;
