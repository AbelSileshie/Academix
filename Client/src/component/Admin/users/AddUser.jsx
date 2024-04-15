import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
function AddUser({ handleOpen, openadd }) {
  return (
    <>
      <Dialog
        size="xl"
        open={openadd}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
      <Card className="mx-auto w-full">
          <CardBody className="grid grid-cols-2 gap-4">
      <div>
        <Typography variant="h4" color="blue-gray">
          New Student
        </Typography>
        <Typography
          className="mb-3 font-normal"
          variant="paragraph"
          color="gray"
        >
          Add the information of the Student
        </Typography>
        </div>
        <div></div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Typography className="text-lg">Name</Typography>
            <Input label="Name" size="lg" />
          </div>
          <div className="flex gap-4">
            <Typography className="text-lg">Department</Typography>
            <Input label="Department" size="lg" />
          </div>
          <div className="flex gap-4">
            <Typography className="text-lg">IDNo</Typography>
            <Input label="ID No" size="lg" />
          </div>
        </div>
      
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Typography className="text-lg">Gender</Typography>
            <Input label="Gender" size="lg" />
          </div>
          <div className="flex gap-4">
            <Typography className="text-lg">Role</Typography>
            <Input label="Role" size="lg" />
          </div>
          <div className="flex gap-4">
            <Typography className="text-lg">Phone Number</Typography>
            <Input label="Phone Number" size="lg" />
          </div>
        </div>
      </div>
    </CardBody>


        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={handleOpen} fullWidth>
            ADD
          </Button>
          {/* <Typography variant="small" className="mt-4 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={handleOpen}
            >
              Sign up
            </Typography>
          </Typography> */}
        </CardFooter>
      </Card>



      </Dialog>
    </>
  );
}
export default AddUser;

