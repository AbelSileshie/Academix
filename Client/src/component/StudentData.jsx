import React from 'react';
import StudentsData from './StudentsData';

const StudentData = () => {
  return (
    <div className="bg-gray-100 px-4 pt-5 pb-4 rounded-xl border border-gray-200 flex-1 m-2 p-6">
      <div className="mt-3">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="font-bold">AASTU</div>
              <div className="text-gray-500 font-bold">DEPARTMENT/ELECTRICAL</div>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <img src="https://source.unsplash.com/random/160x160?person" alt="Admin Photo" className="rounded-full w-14 h-14 ml-4" />
              <div className="ml-2">
                <div className="font-bold">Abebe Kebede</div>
                <div className="text-gray-500">Admin</div>
              </div>
            </div>
            <div className="mt-2 ml-4">
              <label htmlFor="yearPicker" className="mr-2 font-bold">Year:</label>
              <select id="yearPicker" className="border border-gray-300 px-2 py-1 rounded">
                <option value="2022">I</option>
                <option value="2023">II</option>
                <option value="2024">III</option>
                <option value="2024">VI</option>
                <option value="2024">V</option>
              </select>
            </div>
          </div>
        </div>
        <table className="w-full text-gray-700 min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-gray-400 text-left py-4">
              <th></th>
              <th colSpan="2">Semester I</th>
              <th></th>
              <th colSpan="2">Semester II</th>
            </tr>
            <tr className="text-gray-400 text-left py-4">
              <th>Course</th>
              <th>Department</th>
              <th className="text-center">Credit Hour</th>
              <th>Course</th>
              <th>Department</th>
              <th className="text-center">Credit Hour</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {StudentsData.map((data, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td colSpan="6" className="h-8"></td>
                </tr>
                <tr>
                  <td className="py-1">{data.COURSE}</td>
                  <td>{data.department}</td>
                  <td className="text-center">{data['CREDIT HOUR - Semester I']}</td>
                  <td>{data.COURSE}</td>
                  <td>{data.department}</td>
                  <td className="text-center">{data['CREDIT HOUR - Semester II']}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentData;