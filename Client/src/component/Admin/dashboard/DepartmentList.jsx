import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";

const DepartmentList = () => {
  const Token = useSelector(selectCurrentToken);

  const [studentCounts, setStudentCounts] = useState({
    total: "",
    department: "5"
  });
  

  useEffect(() => {
    const fetchStudentCounts = async () => {
      try {
        const response = await axios.get(
          "http://54.237.124.13:8000/user/counts/",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setStudentCounts(response.data.data);
      } catch (error) {
        console.error("Error fetching student counts: ", error);
      }
    };

    fetchStudentCounts();
  }, []);
  // const Token = useSelector(selectCurrentToken);

  // const [departmentCounts, setdepartmentCounts] = useState({
  //   applied: 1500,
  //   engineering: 1500,
  //   departments: 1500,
  // });

  // useEffect(() => {
  //   const fetchdepartmentCounts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://54.237.124.13:8000/user/counts/",
  //         {
  //           headers: {
  //             Authorization: `Token ${Token}`,
  //           },
  //         }
  //       );
  //       departmentCounts(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching student counts: ", error);
  //     }
  //   };

  //   fetchdepartmentCounts();
  // }, []);
  return (
    <div className="w-full h-[400px] flex flex-col gap-5 p-10">
      {/* <div className="w-full gird grid-cols-1  bg-gray-100 rounded-[20px] p-5 shadow-sm">
        <p className="text-[14px] font-extrabold text-gray-700">
          Applied Science
        </p>
        <p className="text-[30px] font-extrabold">{departmentCounts.applied}</p>
      </div> */}
      <div className="w-full gird grid-cols-1  bg-gray-100 rounded-[20px] p-5">
        <p className="text-[14px] font-extrabold text-gray-700">Total Students</p>
        <p className="text-[30px] font-extrabold">
        {studentCounts.total}
        </p>
      </div>
      <div className="w-full gird grid-cols-1  bg-gray-100 rounded-[20px] p-5">
        <p className="text-[14px] font-extrabold text-gray-700">Department</p>
        <p className="text-[30px] font-extrabold">
          {/* {departmentCounts.departments} */}5
        </p>
      </div>
    </div>
  );
};
export default DepartmentList;