import React from "react";
import Cardpost from "./Cardpost";
import StudentNav from "../StudentNav";
import StudenthNav from "../StudenthNav";

const AI = () => {
  return (
    <div className="flex bg-white h-screen overflow-hidden">
      <StudentNav />
      <div className="w-full overflow-y-auto px-1 py-2">
        <div className="flex">
          <StudenthNav />
        </div>
        <Cardpost />
      </div>
    </div>
  );
};

export default AI;
