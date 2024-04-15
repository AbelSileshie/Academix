import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../Features/auth/authSlice";
import {
  Card,
  CardHeader,
  Typography,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon, ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import ChatBubbleOvalLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon";
import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import Postdetail from "./Postdetail";
import Reportpopup from "./Reportpopup";

function Posts() {
  const Token = useSelector(selectCurrentToken);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [openPostId, setOpenPostId] = useState(null);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "http://54.237.124.13:8000/postapi/section",
        {
          headers: {
            Authorization: `Token ${Token}`,
          },
        }
      );
      const data = await response.json();
      console.log("Fetched posts data:", data.posts); // Log posts array
      setPosts(data.posts); // Set posts array to state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const handleOpenPost = (postId) => {
    setOpenPostId(postId);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  let like = 0;

  const handleIsFavorite = async (id) => {
    try {
      let url = `http://54.237.124.13:8000/postapi/posts/${id}/likes`;
      let response;
      if (like === 0) {
        like = 1;
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`,
          },
        });
      } else {
        like = 0;
        url = `http://54.237.124.13:8000/postapi/posts/${id}/unlike`;
        response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Token}`,
          },
        });
      }

      if (!response.ok) {
        throw new Error("Failed to update like status");
      }

      // If needed, update state or perform any other actions upon successful like/unlike
    } catch (error) {
      // Handle error
      console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const [report, Setreport] = React.useState(false);

  const handleReport = () => Setreport(!report);
  return (
    <>
      <ToastContainer />
      <Reportpopup report={report} handleReport={handleReport} />
      <Postdetail
        open={open}
        handleOpen={handleOpen}
        // isFavorite={isFavorite}
        handleIsFavorite={handleIsFavorite}
        postId={openPostId}
      />
      {posts.length === 0 ? (
        <div className="text-center mt-4 text-gray-600">There are no section posts.</div>
      ) : (
        posts.map((post) => (
          <div className="grid grid-cols justify-center items-center h-auto max-h-full mt-2">
            {/* Your Card component and other JSX for displaying posts */}
          </div>
        ))
      )}
      {openPostId === posts.id && <PostDetail post={posts} />}
    </>
  );
}
export default Posts;
