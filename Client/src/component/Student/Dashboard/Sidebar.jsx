import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice.js";
import axios from "axios"; // Import Axios for API requests

import { FiCalendar } from "react-icons/fi";
import tw from "tailwind-styled-components";

const SidebarContainer = tw.div``;

const EventContainer = tw.div`
  mb-6 bg-blue-900 rounded p-4
`;

const EventTitle = tw.h3`
  text-xl font-semibold mb-2
`;

const EventDescription = tw.p`
 text-white
`;

const Sidebar = () => {
  const currentToken = useSelector(selectCurrentToken);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://54.237.124.13:8000/community/event/",
          {
            headers: {
              Authorization: `Token ${currentToken}`,
            },
          }
        );
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
        console.log("events", events);
      }
    };

    fetchData();
  }, [currentToken]); // Include currentToken in the dependency array to fetch data when it changes

  return (
    <div className="w-[370px] h-full bg-white text-gray-800 p-6 gap-2 rounded-[30px]">
      <h3 className="text-2xl font-bold mb-4">Events</h3>
      {events.length > 0 && (
        <div>
          {events.map((event) => (
            <div
              className="mb-6 bg-[#041643] rounded-[20px] p-4 flex flex-col items-center relative"
              key={event.id}
            >
              <div className="flex items-center gap-3 mb-2">
                <FiCalendar className="w-6 h-6 mr-2 text-white" />
                <p className="text-white ">{event.description}</p>

                <p className="text-white"> {event.start_time}</p>
                {event.end_time}
              </div>
              <img
                src="./images/PaperIcon.png"
                alt="event"
                className="w-[50px] h-[70px] absolute right-0 top-0"
              />
            </div>
          ))}
        </div>
      )}
      {events.length === 0 && <p>No events available</p>}
    </div>
  );
};

export default Sidebar;
