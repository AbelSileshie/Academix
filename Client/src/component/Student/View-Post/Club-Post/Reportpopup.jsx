import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import MegaphoneIcon from "@heroicons/react/24/outline/MegaphoneIcon";
function Reportpopup({ report, handleReport }) {
  return (
    <>
      <Dialog open={report} handler={handleReport}>
        <DialogHeader className=" items-center justify-center">
          <Typography color="" variant="h4">
            Read this before proceding!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <Typography variant="h5" color="blue-gray" className=" text-center">
            <MegaphoneIcon className="text-black fill-black item-center" />
            Your Attention is Required!
          </Typography>
          <Typography className="text-center font-normal">
            Before proceding to report please be sure that the post violaates
            our comminity guidelines such as not being respectful, not being
            relevant, or not appropriate Category.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleReport}>
            close
          </Button>
          <Button variant="gradient" onClick={handleReport}>
            proced
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
export default Reportpopup;
