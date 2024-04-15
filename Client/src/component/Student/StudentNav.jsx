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
const StudentNav = () => {
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
              ACADEMIX Student
            </h1>
          </div>
          <ul className="pt-6 place-items-center mt-38">
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/Student")}
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
              onClick={() => Navigate("/Club")}
            >
              <HashtagIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Clubs
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/Section")}
            >
              <HashtagIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Section
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/General")}
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
              onClick={() => Navigate("/Chat")}
            >
              <HashtagIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Ask AI
              </span>
            </li>
            <li
              className="flex  rounded-md p-2 cursor-pointer hover:bg-white hover:text-black text-[#AFAFAF] text-sm items-center focus:bg-white"
              onClick={() => Navigate("/Profile")}
            >
              <UserIcon class="h-6 w-6 text-[#AFAFAF]" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
              >
                Profile
              </span>
            </li>
            <li
              className="flex absolute bottom-0 mb-5 rounded-md p-2 cursor-pointer hover:bg-white hover:text-neutral-800 font-semibold leading-3  text-[#AFAFAF] text-sm items-center"
              onClick={() => handleLogout()}
            >
              <ArrowLeftEndOnRectangleIcon class="h-6 w-6 hover:text-blue-600 text-zinc-400 rotate-180" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-sans font-bold`}
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
export default StudentNav;
