import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import axios from "axios";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Typography,
  Option,
} from "@material-tailwind/react";

function Courcetable({
  departmentId,
  handleIsFavorite,
  handleOpen,
  open,
  isFavorite,
}) {
  const Token = useSelector(selectCurrentToken);
  const [courses, setCourses] = useState([]);
  const [academicYear, setAcademicYear] = useState(1); // Default to 1st year

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // const response = await axios.get(`http://54.237.124.13:8000/basicapp/department/${departmentId}/year/${academicYear}`, {
         
        const response = await axios.get(
          `http://54.237.124.13:8000/basicapp/department/${departmentId}`,
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setCourses(response.data.courses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, [departmentId, academicYear]);

  const handleChangeYear = (value) => {
    setAcademicYear(value);
  };

  return (
    <>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              {/* <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Eletrical Department
              </Typography> */}
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                Engineering
              </Typography>
            </div>
          </div>
          <div className="flex w-10 flex-col float-right"></div>
          <div className="flex items-center gap-2">
            {/* <Select
              size="md"
              label="Select Year"
              value={academicYear}
              onChange={handleChangeYear}
            >
              <Option value={1}>I</Option>
              <Option value={2}>II</Option>
              <Option value={3}>III</Option>
              <Option value={4}>IV</Option>
              <Option value={5}>V</Option>
            </Select> */}
          </div>
        </DialogHeader>
        <DialogBody>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Courses
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credit Hour
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Academic Year
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {course.credit_hour}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {course.academic_year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Number Of Courses
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {courses.length}
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Total Credit Hours
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {courses.reduce((acc, course) => acc + course.credit_hour, 0)}
              </Typography>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Courcetable;