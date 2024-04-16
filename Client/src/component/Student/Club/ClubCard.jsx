import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";

import ClupDetial from "./ClupDetial";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ClubCard() {
  const [clubs, setClubs] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedClubId, setSelectedClubId] = useState(null);
  const clubTableRef = useRef(null); // Create a ref for ClubTable
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch(
          "http://54.237.124.13:8000/community/club/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setClubs(data.clubs);
          toast.success("Clubs fetched successfully");
        } else {
          throw new Error("Failed to fetch clubs");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch clubs");
      }
    };

    fetchClubs();
  }, [token]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        clubTableRef.current &&
        !clubTableRef.current.contains(event.target)
      ) {
        setOpen(false); // Close ClubTable
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  const Navigate = useNavigate();
  const [openA, setOpenA] = React.useState(false);
  const handleOpenA = () => setOpenA(!openA);
  const FunSelectedClubId = (clubId) => {
    setSelectedClubId(clubId);
    Navigate("/Club_Post");
    console.log("Clubid", clubId);
  };
  return (
    <>
      {/* <ClupDetial openA={openA} handleOpenA={handleOpenA} /> */}
      <div className="flex w-full">
        <div className="grid grid-cols-3 gap-10 mt-5 h-full" ref={clubTableRef}>
          {open && (
            <div ref={clubTableRef}>
              <ClupDetial
                clubId={selectedClubId}
                // handleOpenA={handleOpenA}
                // openA={openA}
              />
            </div>
          )}
          {clubs.map((club) => (
            <Card
              key={club.id}
              className="ml-3 mt-3 w-80 cursor-pointer"
              onClick={() => FunSelectedClubId(club.id)}
            >
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {club.name}
                </Typography>
                <div className=" w-full h-56 rounded-lg overflow-auto">
                  <Typography className="object-cover object-center w-full h-full aspect-h-1">
                    {club.overview}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography>
                  {/* {club.head ? club.head : "Club Head"} */}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default ClubCard;
