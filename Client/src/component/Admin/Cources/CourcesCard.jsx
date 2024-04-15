import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
const CourcesCard = () => {
  return (
    <div>
      <Card className="flex h-full w-full mt-5">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className=" flex items-center justify-between ">
            <div>
              <Typography variant="h5" color="blue-gray">
                Courses
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex items-center gap-3"
                size="sm"
                // onClick={handleOpen}
              >
                {/* <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Staff */}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CourcesCard;
