import React from "react";
import Departmentcard from "./Departmentcard";
import AdminNav from "../AdminNav";
import AdminhNav from "../AdminhNav";
const Department = () => {
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
          <Departmentcard />
        </div>
      </div>
    </>
  );
};

export default Department;
