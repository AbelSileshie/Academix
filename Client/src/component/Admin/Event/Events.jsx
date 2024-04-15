import React from "react";
import AdminhNav from "../AdminhNav";
import AdminNav from "../AdminNav";
import EventTable from "./EventTable";

function Events() {
  return (
    <div className="flex bg-white h-screen overflow-hidden">
      {/* Navigation component (commented out for now) */}
      <AdminNav />
      {/* Content container with full width, vertical scrolling, and padding */}
      <div className="w-full overflow-y-auto px-1 py-2">
        {/* Section title */}
        <div className="flex">
          <AdminhNav />
        </div>
        <div className="">
          <h2 className="text-xl font-bold "></h2>
        </div>
        {/* Card components */}
        <EventTable />
      </div>
    </div>
  );
}

export default Events;
