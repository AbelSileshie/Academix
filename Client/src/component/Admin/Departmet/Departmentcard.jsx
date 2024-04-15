import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Courcetable from "./Courcetable";
import AdminNav from "../AdminNav";

function Departmentcard() {
  const [departments, setDepartments] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const courcetableRef = useRef(null); // Create a ref for Courcetable

  const handleOpen = (departmentId) => {
    setSelectedDepartmentId(departmentId);
    setOpen(true);
  };
  const Token = useSelector(selectCurrentToken);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(
          "http://54.237.124.13:8000/basicapp/departments",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setDepartments(data.department);
        } else {
          throw new Error("Failed to fetch departments");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        courcetableRef.current &&
        !courcetableRef.current.contains(event.target)
      ) {
        setOpen(false); // Close Courcetable
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div className="flex w-full">
        <div className="grid grid-cols-3 gap-10 mt-5 h-full">
          {open && (
            <div ref={courcetableRef}>
              <Courcetable
                departmentId={selectedDepartmentId}
                handleOpen={handleOpen}
                open={open}
              />
            </div>
          )}
          {departments.map((department) => (
            <Card
              key={department.id}
              className="ml-3 mt-3 w-80 cursor-pointer"
              onClick={() => handleOpen(department.id)}
            >
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {department.name}
                </Typography>
                <div className=" w-full h-56 rounded-lg overflow-auto">
                  <Typography className="object-cover object-center w-full h-full aspect-h-1">
                    {department.overview}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography>
                  {department.head ? department.head : "Department Head"}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Departmentcard;
