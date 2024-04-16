import React from "react";
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

  const [posts, setPosts] = useState([]);
  const [openPostId, setOpenPostId] = useState(null);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`postapi/club/2/posts`, {
        headers: {
          Authorization: `Token ${Token}`,
        },
      });
      const data = await response.json();
      console.log("Fetched posts data:", data.posts); // Log posts array
      setPosts(data.posts); // Set posts array to state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const postid = 2;
  const handleOpenPost = (postid) => {
    setOpenPostId(postid);
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  // const [isFavorite, setIsFavorite] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  // const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  // const handleIsFavorite = (id) => {
  //   let like = 0;
  //   like = 1 - like;
  //   if (like == 1) {
  //     const url = `http://54.237.124.13:8000/postapi/posts/${id}/likes`;
  //     try {
  //       const response = fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${Token}`, // Assuming Token is accessible here
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to update like status");
  //       }

  //       // // Update likes count based on the new like status
  //       // setLikesCount(newLikeStatus === 1 ? likesCount + 1 : likesCount - 1);
  //       // setLiked(newLikeStatus === 1);
  //     } catch (error) {
  //       console.error("Error updating like status:", error);
  //       // Handle error, e.g., show a toast message
  //     }
  //   } else {
  //   const url = `http://54.237.124.13:8000/postapi/posts/${id}/unlikes`;
  //     /  //     try {
  //       const response = fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Token ${Token}`, // Assuming Token is accessible here
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to update like status");
  //       }

  //       // // Update likes count based on the new like status
  //       // setLikesCount(newLikeStatus === 1 ? likesCount + 1 : likesCount - 1);
  //       // setLiked(newLikeStatus === 1);
  //     } catch (error) {
  //       console.error("Error updating like status:", error);
  //       // Handle error, e.g., show a toast message
  //     }
  //   }
  // };
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
      console.error("Error updating like status:", error);
      // Handle error, e.g., show a toast message
    }
  };

  const [report, Setreport] = React.useState(false);

  const handleReport = () => Setreport(!report);
  return (
    <>
      <Reportpopup report={report} handleReport={handleReport} />
      <Postdetail
        open={open}
        handleOpen={handleOpen}
        // isFavorite={isFavorite}
        handleIsFavorite={handleIsFavorite}
        postId={openPostId}
      />
     {posts.length === 0 ? (
  <Typography variant="h6" color="gray" className="mt-5">
    No posts available
  </Typography>
) : (
  posts.map((post) => (
    <div key={post.id} className="grid grid-cols justify-center items-center h-auto max-h-full mt-2">
      {/* Your Card component and its content here */}
    </div>
  ))
)}
{openPostId && <PostDetail post={posts.find(post => post.id === openPostId)} />}

    </>
  );
}
export default Posts;
