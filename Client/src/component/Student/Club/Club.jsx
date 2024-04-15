import React from "react";
import StudenthNav from "../StudenthNav";
import StudentNav from "../StudentNav";
import { Button, IconButton } from "@material-tailwind/react";
import CreateClubRequest from "./CreateClubRequest";
import { PlusIcon } from "@iconicicons/react";
import ClubCard from "./ClubCard";
import ClupDetial from "./ClupDetial";
const Club = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
 
  return (
    <> 
    
      <div className="flex bg-white h-screen overflow-hidden">
        <StudentNav />
        <div className="w-full overflow-y-auto px-1 py-2">
          <div className="flex">
            <StudenthNav />
          </div>
          <CreateClubRequest
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
          />
          <IconButton
            onClick={handleOpen}
            className=" float-right rounded-full mr-5 mt-3"
          >
            <PlusIcon className="text-blue-gray-500" />
          </IconButton>

          <ClubCard  
          


          
          />
        </div>
      </div>
    </>
  );
};

export default Club;
