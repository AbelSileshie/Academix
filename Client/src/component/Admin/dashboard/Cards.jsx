import React, { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";

function Cards() {
  const Token = useSelector(selectCurrentToken);

  const [studentCounts, setStudentCounts] = useState({
    first_year: 1500,
    second_year: 1500,
    third_year: 1500,
    forth_year: 1500,
    fifth_year: 1500,
  });
  const [repCounts, setrepCounts] = useState({
    first_year: 4,
    second_year:3,
    third_year: 5,
    forth_year: 10,
    fifth_year: 5,
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

  return (
    <div className="flex flex-col">
      <div className="p-5 flex justify-between">
        <p className="text-[20px] font-extrabold">Dashboard</p>
        <div className="pt-2 px-4 bg-gray-200 text-[11px] justify-center items-center rounded-full">
          <p>Over All</p>
        </div>
      </div>
      <div className="w-ful h-[250px] flex gap-10 p-5">
        <div className="w-full gird grid-cols-1  bg-[#84a4f6] border-solid border-2 rounded-[20px] px-5 pt-24">
          <p className="text-[14px] font-extrabold text-gray-700">
            Freshman Students
          </p>
          <p className="text-[30px] font-extrabold">
            {studentCounts.first_year}
          </p>
          <p className="text-[11px] font-extrabold">
            Reps: {repCounts.first_year}
          </p>
        </div>
        <div className="w-full gird grid-cols-1  bg-[#d4f055] border-solid border-2 rounded-[20px] px-5 pt-24">
          <p className="text-[14px] font-extrabold text-gray-700">
            Second Year Students
          </p>
          <p className="text-[30px] font-extrabold">
            {studentCounts.second_year}
          </p>
          <p className="text-[11px] font-extrabold">
            Reps: {repCounts.second_year}
          </p>
        </div>
        <div className="w-full gird grid-cols-1  bg-[#cb8df2] border-solid border-2 rounded-[20px] px-5 pt-24">
          <p className="text-[14px] font-extrabold text-gray-700">
            Third Year Students
          </p>
          <p className="text-[30px] font-extrabold">
            {studentCounts.third_year}
          </p>
          <p className="text-[11px] font-extrabold">
            Reps: {repCounts.third_year}
          </p>
        </div>
        <div className="w-full gird grid-cols-1  bg-[#ff7765] border-solid border-2 rounded-[20px] px-5 pt-24">
          <p className="text-[14px] font-extrabold text-gray-700">
            Fourth Year Students
          </p>
          <p className="text-[30px] font-extrabold">
            {studentCounts.forth_year}
          </p>
          <p className="text-[11px] font-extrabold">
            Reps: {repCounts.forth_year}
          </p>
        </div>
        <div className="w-full gird grid-cols-1 bg-[#f5923c] border-solid border-2 rounded-[20px] px-5 pt-24">
          <p className="text-[14px] font-extrabold text-gray-700">
            Graduating Students
          </p>
          <p className="text-[30px] font-extrabold">
            {studentCounts.fifth_year}
          </p>
          <p className="text-[11px] font-extrabold">
            Reps: {repCounts.fifth_year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
