import React, { useState, useEffect } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AddUser from "./AddUser";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";

import {
  TrashIcon,
  UserIcon,
  UserPlusIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
  Tooltip,
  Select,
} from "@material-tailwind/react";
import Userinformation from "./Userinformation";

const SearchHeaderforUsers = () => {
  const Token = useSelector(selectCurrentToken);

  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://54.237.124.13:8000/user/users/",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setStudents(response.data.students);
        console.log(response.data.students);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://54.237.124.13:8000/user/${id}`, {
        headers: {
          Authorization: `Token ${Token}`,
        },
      });
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredStudents = students.filter((student) =>
    `${student.username}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AddUser />
      <Userinformation
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
      <Card className="flex">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72 mb-1 pt-3">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            {/* <div className="w-72">
              <Select label="Filter">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div> */}
          </div>
        </CardHeader>
        <CardBody
          className="overflow-scroll px-0 
        "
        >
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    User Name
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Phone Number
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Id Number
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Role
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Actions
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.username}>
                  <td className="border-b border-blue-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <UserIcon className="size-8 text-black" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {`${student.first_name} ${student.last_name}`}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {student.email}
                          <br /> {student.username}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.phone_number}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.student.student_id}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.is_staff ? "Staff" : "Student"}
                    </Typography>
                  </td>
                  <td className="border-b border-blue-gray-50 p-4">
                    {/* <Tooltip content="View">
                      <IconButton
                        className="mr-2"
                        onClick={() => handleView(student)}
                      >
                        <EyeIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip> */}
                    <Tooltip content="Delete">
                      <IconButton onClick={() => handleDelete(student.id)}>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default SearchHeaderforUsers;
