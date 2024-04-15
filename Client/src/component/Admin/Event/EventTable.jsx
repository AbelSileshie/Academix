import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import axios from "axios";
import { Button, IconButton } from "@material-tailwind/react";
import Resource from "./Resource";
import { PlusIcon } from "@iconicicons/react";

function Events() {
  const [events, setEvents] = useState([]);
  const [openA, setOpenA] = React.useState(false);
  const handleOpenA = () => setOpenA(!openA);

  const Token = useSelector(selectCurrentToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your_api_endpoint' with your actual API endpoint
        const response = await axios.get(
          "http://54.237.124.13:8000/community/event/",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  const [requests, setRequests] = useState([]); // Add a comma here

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your_api_endpoint' with your actual API endpoint
        const response = await axios.get(
          "http://54.237.124.13:8000/request/all",
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        setRequests(response.data.requests); // Update 'setEvents' to 'setRequests'
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     // Replace 'your_api_endpoint' with your actual API endpoint
  //     const response = await axios.get(
  //       `http://54.237.124.13:8000/user/${request.student}`,
  //       {
  //         headers: {
  //           Authorization: `Token ${Token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     setRequests(response.data.requests); // Update 'setEvents' to 'setRequests'
  //   } catch (error) {
  //     console.error("Error fetching requests:", error);
  //   }
  // };

  // fetchData();
  const handleApprove = async (id) => {
    try {
      const response = await axios.delete(
        `http://54.237.124.13:8000/request/${id}/delete`,
        {
          headers: {
            Authorization: `Token ${Token}`,
            "Content-Type": "application/json", // Corrected content-type header
          },
          data: {
            status: "A", // Sending status in the request body
          },
        }
      );
      // Update the request status locally if delete request is successful
      if (response.status === 200) {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === id ? { ...request, status: 1 } : request
          )
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };

  // const handleApprove = async (id) => {
  //   try {
  //     await axios.delete(
  //       `http://54.237.124.13:8000/request/${id}/delete`,
  //       { status: "Accepted" },
  //       {
  //         headers: {
  //           Authorization: `Token ${Token}`,
  //           contet_type: "application/json",
  //         },
  //       }
  //     );
  //     // Update the request status locally
  //     setRequests((prevRequests) =>
  //       prevRequests.map((request) =>
  //         request.id === id ? { ...request, status: "Accepted" } : request
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error approving request:", error);
  //   }
  // };

  const handleDecline = async (id) => {
    try {
      const response = await axios.delete(
        `http://54.237.124.13:8000/request/${id}/delete`,
        {
          headers: {
            Authorization: `Token ${Token}`,
            "Content-Type": "application/json", // Corrected content-type header
          },
          data: {
            status: "D", // Sending status in the request body
          },
        }
      );
      // Update the request status locally if delete request is successful
      if (response.status === 200) {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.id === id ? { ...request, status: 0 } : request
          )
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error declining request:", error);
    }
  };
  return (
    <div className="p-4">
      <Resource openA={openA} handleOpenA={handleOpenA} />
      <IconButton
        onClick={handleOpenA}
        className=" float-right rounded-full mr-5 mt-3 mb-3"
      >
        <PlusIcon className="text-blue-gray-500" />
      </IconButton>
      <h2 className="text-xl font-bold mb-4">EVENTS</h2>
      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Building</th>
            <th className="border border-gray-300 px-4 py-2">Club</th>
            <th className="border border-gray-300 px-4 py-2">Start Time</th>
            <th className="border border-gray-300 px-4 py-2">End Time</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr key={event.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {event.building}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.club}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.start_time}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.end_time}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {event.description}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-gray-300 px-4 py-2" colSpan="5">
                No events available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <h2 className="text-xl font-bold mb-4">Request</h2>
        <table className="w-full border-collapse border border-gray-300 mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">First Name</th>
              <th className="border border-gray-300 px-4 py-2">
                Last Name Name
              </th>
              <th className="border border-gray-300 px-4 py-2">Student ID</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.description}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    {request.first_name}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    {request.last_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.student_id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Button onClick={() => handleApprove(request.id)}>
                      Approve
                    </Button>
                    <br />
                    <br />
                    <Button onClick={() => handleDecline(request.id)}>
                      Decline
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border border-gray-300 px-4 py-2" colSpan="3">
                  No club requests available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Events;
