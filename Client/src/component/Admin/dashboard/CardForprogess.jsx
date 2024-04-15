import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";

import { FaCircle, FaCircleCheck } from "react-icons/fa6";

// Function to calculate the percentage
const calculatePercentage = (count, total) => {
  return (count / total) * 100;
};

// Component for the circle progress bar
const CircleProgress = ({ percentage, color }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;

  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

// Component for displaying the percentage text
const PercentageText = ({ percentage, position }) => {
  return (
    <text
      x={position.x}
      y="50%"
      dominantBaseline="central"
      textAnchor={position.anchor}
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

// Main component to display the progress circle
const ProgressCircle = () => {
  const Token = useSelector(selectCurrentToken);
  const [femaleCount, setFemaleCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://54.237.124.13:8000/user/counts/",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );

        const data = response.data.data; // Assuming the data is nested under 'data' key

        // Set female and male counts
        setFemaleCount(data.female);
        setMaleCount(data.male);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Calculate the total count
  const totalCount = femaleCount + maleCount;

  // Calculate the percentages
  const femalePct = calculatePercentage(femaleCount, totalCount);
  const malePct = calculatePercentage(maleCount, totalCount);

  return (
    <>
      <div>
        <svg width={200} height={200}>
          <g transform={`rotate(-90 100 100)`}>
            <CircleProgress color="blue" percentage={femalePct} />
            <CircleProgress color="green" percentage={malePct} />
          </g>
          <PercentageText
            percentage={femalePct}
            position={{ x: "90%", anchor: "end" }}
          />
          <PercentageText
            percentage={malePct}
            position={{ x: "10%", anchor: "start" }}
          />
        </svg>
      </div>
      <div className="flex gap-5">
        <FaCircle className="fill-green-900 mb-1" />

        <h3 className=" flex ">males</h3>
        <p>{maleCount}</p>
      </div>
      <div className="flex gap-4">
        <FaCircle className="fill-light-blue-900 mb-1" />

        <h3>females</h3>
        <p>{femaleCount}</p>
      </div>
    </>
  );
};

export default ProgressCircle;
