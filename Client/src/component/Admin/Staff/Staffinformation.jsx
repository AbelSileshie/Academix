import React from "react";
import {
  Avatar,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
const Userinformation = ({ open, closeDrawer }) => {
  return (
    <>
      <React.Fragment>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Student Information
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              variant="rounded"
              size="xxl"
            />
          </div>
          {/* <div>
          {TABLE_ROWS.map(({ name, Id }, index) => {
              return (
                <div>
                  <Typography variant="h3">
                    {TABLE_ROWS.name}Sample Student
                  </Typography>
                  <Typography variant="h6" className="text-center">
                    {TABLE_ROWS.name}Sec19 Representative
                  </Typography>
                </div>
              );
            })}
           </div> */}
          <div>
            <div className="text-center">
              <Typography variant="h3">Tania Andrew</Typography>
              <Typography variant="h5" color="gray" className="font-normal">
                Sec19 Student
              </Typography>
            </div>
            <Typography variant="small" color="blue-gray"></Typography>
            <div className="flex gap-2">
              <Button size="sm" variant="outlined">
                Representative
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default Userinformation;
