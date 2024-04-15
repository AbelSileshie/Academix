import React from "react";
import AdminNav from "../AdminNav";
import AdminhNav from "../AdminhNav";
import CourcesCard from "./CourcesCard";

const Cources = () => {
  return (
    <>
      <div className="flex bg-white h-screen overflow-hidden">
        <AdminNav />
        <div className="w-full overflow-y-auto px-1 py-2">
          <div className="flex">
            <AdminhNav />
          </div>
          <div className="">
            <h2 className="text-xl font-bold "></h2>
          </div>
          <CourcesCard />
        </div>
      </div>
    </>
  );
};

export default Cources;
