import React, { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

function Resource({ handleOpenA, openA }) {
  const token = useSelector(selectCurrentToken);
  const [formData, setFormData] = useState({
    id: "",
    club: "",
    start_time: "",
    end_time: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://54.237.124.13:8000/community/event/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      alert("Event Created Successfully");
      // Optionally, redirect or show a success message
    } catch (error) {
      alert("Error creating event", error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <>
      <Dialog open={openA} size="xs" handler={handleOpenA}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Create Events
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpenA}
          >
            {/* SVG Path */}
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <Typography className="mb-10 -mt-7" color="gray" variant="lead">
              change the world with your knowledge and skills
            </Typography>
            <div className="grid gap-6">
              <Input
                type="number"
                p
                id="clubId"
                name="club"
                value={formData.club}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter Your ClubId For Confirmation"
              />
              <Input
                type="date"
                id="startTime"
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <Input
                type="date"
                id="endTime"
                name="end_time"
                value={formData.end_time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                label="Description"
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <Button variant="text" color="gray" onClick={handleOpenA}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient" color="gray">
              Send Post
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

export default Resource;
