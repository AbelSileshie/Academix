import React, { useState, useEffect } from "react";
import {
  Textarea,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import ArrowDownCircleIcon from "@heroicons/react/24/outline/ArrowDownCircleIcon";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../Features/auth/authSlice";

function Postdetail({
  open,
  handleOpen,
  isFavorite,
  handleIsFavorite,
  clubId,
}) {
  const Token = useSelector(selectCurrentToken);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(
          ` postapi/club/${clubId}/posts`,
          {
            headers: {
              Authorization: `Token ${Token}`,
            },
          }
        );
        const postData = await response.json();
        // console.log("Post details:", postData);
        console.log("Post details:", clubId);
        setPost(postData); // Set fetched post data to state
      } catch (error) {}
    };
    fetchPostDetails();
  }, [clubId]);
  return (
    <Dialog size="xl" open={open} handler={handleOpen} className="w-full">
      {post && (
        <>
          <DialogHeader className="justify-between">
            <div className="flex items-center gap-3">
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <div className="-mt-px flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="text-xs font-normal"
                >
                  Student President
                </Typography>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconButton
                variant="text"
                size="sm"
                color={isFavorite ? "red" : "blue-gray"}
                onClick={() => handleIsFavorite(post.post.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </IconButton>
              <IconButton size="sm">
                <ArrowDownCircleIcon class="h-6 w-6" />
              </IconButton>
            </div>
          </DialogHeader>
          <DialogBody className="grid grid-cols-2 gap-">
            <Card className="w-full">
              <img
                alt="nature"
                className="rounded-lg object-cover object-center"
                src={`http://54.237.124.13:8000${post.post.file}`}
              />
              <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
                {post.post.content}
              </div>
            </Card>
            <Card className="w-full">
              <div className="flex w-full flex-row items-center gap-2 p-2 mt-1 overflow-y-scroll h-full">
                <Card className="w-full mt-5">{post.post.content}</Card>
              </div>
              <div className="flex w-full flex-row items-center gap-2 border border-gray-900/10 bg-gray-900/5 p-2 mt-1 ">
                <div className="flex">
                  <IconButton variant="text" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>
                  </IconButton>
                </div>
                <Textarea
                  rows={1}
                  resize={true}
                  placeholder="Your Comment"
                  className="min-h-full !border-0 focus:border-transparent"
                  containerProps={{
                    className: "grid h-full",
                  }}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div>
                  <IconButton variant="text" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </IconButton>
                </div>
              </div>
            </Card>
          </DialogBody>
          <DialogFooter className="justify-between">
            <div className="flex items-center gap-16">
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Likes
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {post.post.likes}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Comment
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {post.post.comment}
                </Typography>
              </div>
            </div>
          </DialogFooter>
        </>
      )}
    </Dialog>
  );
}
export default Postdetail;
