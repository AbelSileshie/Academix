import React, { useState } from "react";



const Cards = ({ icon, title, data }) => {
  const [hoverActive, setHoverActive] = useState(true);

  const handleHoverAndClick = () => {
    setHoverActive(!hoverActive);
  };

  return (
    <div
    id="hovered"
    className={`rounded-xl ${
      hoverActive
        ? "bg-[#041643] p-4 rounded-lg shadow-md border-[#041643]"
        : "bg-[#041643] border border-[#041643] transform scale-110 transition-all duration-300 ease-in-out"
    } p-4 rounded-lg shadow-md md:h-[280px] md:w-[250px] xl:h-full xl:w-full `}
    onMouseEnter={handleHoverAndClick}
    onMouseLeave={handleHoverAndClick}
  >
       <div className="flex flex-col items-start mb-4 text-white">
            {icon}
            <h3 className="text-white font-semibold text-lg mb-2 ">{title}</h3>
          </div>
          <p className="text-white">{data}</p>
          <br />
          <a href="#" className=" hover:text-blue-500 block text-center text-white">View More</a>
       

    </div>
  );
};

export default Cards;
