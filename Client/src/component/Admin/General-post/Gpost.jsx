import React from "react";
import Posts from "./Posts";
import StudentNav from "../AdminNav";
import StudenthNav from "../AdminhNav";

const Gpost = () => {
  return (
    <>
      <div className="flex bg-white h-screen overflow-hidden">
        <StudentNav />
        <div className="w-full overflow-y-auto px-1 py-2">
          <div className="flex">
            <StudenthNav />
          </div>
          <div className="">
            <h2 className="text-xl font-bold "></h2>
          </div>

          <Posts />
        </div>
      </div>
    </>
  );
};

export default Gpost;
