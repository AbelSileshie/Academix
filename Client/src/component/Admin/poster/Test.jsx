import React, { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./../../../Features/auth/authSlice";

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

function Test({ handleOpen, open }) {
  const Token = useSelector(selectCurrentToken);
  const [formData, setFormData] = useState({
    content: "",
    file: null,
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("content", formData.content);
      formDataToSend.append("file", formData.file);

      await axios.post(
        "http://54.237.124.13:8000/postapi/posts/",
        formDataToSend,
        {
          headers: {
            Authorization: `Token ${Token}`,
          },
        }
      );

      // Close the dialog after successful submission
      alert(" you secses full posted");

      handleOpen(open);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message); // Assuming the API returns an error message
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert(error.response.report.message); // This line seems incorrect, should be error.response.data.message
        alert(error.response.data.message);
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              New Post to @
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            {/* SVG Path */}
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <Typography className="mb-10 -mt-7" color="gray" variant="lead">
              Write what's in your mind
            </Typography>
            <div className="grid gap-6">
              <Input
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <Textarea
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
              <input
                type="file"
                label="Upload File"
                onChange={handleFileChange}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
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

export default Test;
