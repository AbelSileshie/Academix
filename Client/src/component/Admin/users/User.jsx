import React from "react";
// import DashBoard from './DashBoard.jsx';
import SearchHeader from "./Usertable.jsx";
import StudentsData from "./StudentsData.js";
import AdminNav from "../AdminNav.jsx";
import AdminhNav from "../AdminhNav.jsx";

function Overall() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = StudentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
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

          <SearchHeader />
          {searchTerm && (
            <SearchHeader
              searchTerm={searchTerm}
              filteredStudents={filteredStudents}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Overall;
