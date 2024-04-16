import React from "react";
// Import components
import Cards from "./Cards";
import CardForprogess from "./CardForprogess";
import EventTable from "./EventTable";
import AdminNav from "../AdminNav";
import AdminhNav from "../AdminhNav";
import TrendingPosts from "./TrendingPosts";
import DepartmentList from "./DepartmentList";

const Aminpage = () => {
  return (
    // Main container with flex layout, white background, and full screen height

    <div className="flex bg-white overflow-hidden h-[100vh]">
      <AdminNav />
      <div className="w-full overflow-y-auto px-1 py-2">
        <div className="">
          <AdminhNav />
        </div>
        <Cards />
        <div className="grid grid-cols-2 h-[400px]">
          <div className=" h-full">
            <TrendingPosts />
          </div>
          <div className="h-full grid grid-cols-2 ">
            <DepartmentList />
            <div className="w-full h-[400px] bg-gray-100  rounded-[20px]">
              <CardForprogess />
            </div>
          </div>
        </div>
        <EventTable />

        {/*
          <br />
          <br />
          <br /> */}
      </div>
    </div>
  );
};

export default Aminpage;
