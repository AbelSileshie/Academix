import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../Features/auth/authSlice";
import {
  Popover,
  Card,
  PopoverHandler,
  PopoverContent,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { UserIcon, BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import ChatBubbleOvalLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon";
import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import Postdetail from "./Postdetail";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = React.useState(false);
  // const [isFavorite, setIsFavorite] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [openPostId, setOpenPostId] = useState(null);
  const [hoveredPost, setHoveredPost] = useState(null);
  const Token = useSelector(selectCurrentToken);
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await fetch(
          `http://54.237.124.13:8000/postapi/posts/trending`,
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        const data = await response.json();
        setTrendingPosts(data.trending);
      } catch (error) {
        console.error("Error fetching trending posts:", error);
      }
    };

    fetchTrendingPosts();
  }, [Token]);

  const handlePopoverOpen = (postId) => {
    setHoveredPost(postId);
  };
  const handleOpenPost = (postId) => {
    setOpenPostId(postId);
    setOpen(true);
  };
  const handlePopoverClose = () => {
    setHoveredPost(null);
  };

  return (
    <div className="">
      <Postdetail
        open={open}
        handleOpen={handleOpen}
        // isFavorite={isFavorite}
        postId={openPostId}
      />
      <Card className="flex justify-center mt-10 w-fit mb-10">
        <div className="ml-3 mt-3 rounded-none text-left bg-transparent">
          <Typography
            variant="h5"
            color="black"
            className="mb-2 flex gap-2 text-left text-[20px] font-extrabold bg-transparent"
          >
            Trending Posts
          </Typography>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 h-full overflow-y-scroll">
          {trendingPosts.map((post, index) => (
            <div
              key={post.id}
              className={`flex flex-col p-3 overflow-y-auto ${
                index >= 3 ? "hidden" : ""
              }`}
              onMouseOver={() => handlePopoverOpen(post.id)}
              onMouseLeave={handlePopoverClose}
            >
              <Popover>
                <PopoverHandler>
                  <img
                    src={`http://54.237.124.13:8000${post.file}`}
                    alt={`Trending Post ${post.id}`}
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                  />
                </PopoverHandler>
                {hoveredPost === post.id && (
                  <PopoverContent className=" max-w-sm max-h-sm">
                    <div className=" h-64 rounded-l shadow-md">
                      <div floated={false} color="" className="">
                        <div className="flex items-center">
                          <IconButton className="rounded-full">
                            <UserIcon className="h-6 w-6 text-white" />
                          </IconButton>
                          <div>
                            <Typography variant="h6">Abebe Kebede</Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              {post.created_at}
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <img
                        src={`http://54.237.124.13:8000${post.file}`}
                        className="object-cover object-center w-auto h-full aspect-square"
                        alt={`Trending Post ${post.id}`}
                      />
                      <div className="block mt-5 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
                        <div className="flex float-right">
                          <IconButton
                            size="sm"
                            color=""
                            variant="text"
                            className="rounded-full"
                          >
                            <BookmarkIcon className="h-6 w-6 float-right" />
                          </IconButton>
                        </div>
                        <div className="flex mt-5">
                          <IconButton
                            size="sm"
                            color="red"
                            variant="text"
                            className="rounded-full"
                          >
                            <HeartIcon className="h-6 w-6 float-left" />
                          </IconButton>
                          <IconButton
                            size="sm"
                            color=""
                            variant="text"
                            className="rounded-full"
                            onClick={() => handleOpenPost(post.id)}
                          >
                            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 float-left" />
                          </IconButton>
                          <IconButton
                            size="sm"
                            color=""
                            variant="text"
                            className="rounded-full"
                          >
                            <ExclamationCircleIcon className="h-6 w-6 float-left" />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                )}
              </Popover>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrendingPosts;
