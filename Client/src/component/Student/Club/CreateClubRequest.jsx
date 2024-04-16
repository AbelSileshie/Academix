import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import { selectCurrentUser } from "../../../Features/auth/authSlice";
import Login from "../../../pages/Home/Login";
import { toast } from "react-toastify";
const CreateClubRequest = ({ open, handleOpen, setOpen }) => {
  const Token = useSelector(selectCurrentToken);
  const LogedinUser = useSelector(selectCurrentUser);

  const [formData, setFormData] = useState({
    description: "",
    student: LogedinUser.id,
    club: {
      name: "",
      overview: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Form Data:", formData);
    const id = LogedinUser.id;
    try {
      const response = await axios.post(
        "http://54.237.124.13:8000/request/create",
        {
          description: formData.description,
          student: id,
          club: {
            name: formData.club.name,
            overview: formData.club.overview,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`, // Use the actual token variable here
          },
        }
      );
      toast.success("Club creation request sent successfully");
      console.log(response.data); // handle successful response
    } catch (error) {
      console.error("Error occurred:", error); // handle error
      toast.error("Failed to send club creation request");
    }
  };

  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Club Creation Request
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          <div className="grid gap-2">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Description
            </Typography>
            <Input
              label="Goal"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <Input
              name="student"
              value={LogedinUser.id}
              onChange={handleChange}
              hidden
            />
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Club Name
            </Typography>
            <Input
              label="Club Name"
              name="club"
              value={formData.club.name}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  club: { ...prevData.club, name: e.target.value },
                }))
              }
            />
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Club Overview
            </Typography>
            <Input
              label="Club Overview"
              name="overview"
              value={formData.club.overview}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  club: { ...prevData.club, overview: e.target.value },
                }))
              }
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            Cancel
          </Button>
          <Button variant="gradient" color="gray" onClick={handleSubmit}>
            Send Message
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CreateClubRequest;
