import React from "react";
import {
  Popover,
  Card,
  PopoverHandler,
  PopoverContent,
  IconButton,
  Textarea,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import ChatBubbleOvalLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon";
import ExclamationCircleIcon from "@heroicons/react/24/outline/ExclamationCircleIcon";
import Postdetail from "./Postdetail";
function TrendingPostcard() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
  ];

  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  const data1 = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];
  return (
    <div>
      <Popover open={openPopover} handler={setOpenPopover}>
        <Card className=" flex justify-center items-center mt-20 w-fit ml-4 mb-10">
          <CardHeader>
            <Typography
              variant="h5"
              color="black"
              className="mb-2 flex items-center gap-2 font-extrabold text-left"
            >
              Trending Posts
            </Typography>
          </CardHeader>
          <div className="grid  gap-1 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 h-44 overflow-y-scroll">
            {data1.map(({ imageLink }, index) => (
              <div key={index}>
                <PopoverHandler {...triggers}>
                  <img
                    className="h-20 w-20  rounded-lg object-cover object-center cursor-pointer"
                    src={imageLink}
                    alt="gallery-photo"
                  />
                </PopoverHandler>
              </div>
            ))}
          </div>
        </Card>

        <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
          <Postdetail
            open={open}
            handleOpen={handleOpen}
            isFavorite={isFavorite}
            handleIsFavorite={handleIsFavorite}
          />
          <div className="w-full max-w-[35rem] mb-5">
            <div floated={false} color="" className="bg-white ">
              <div className="flex items-center gap-2 mt-3 ml-2 mb-2">
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
                    Student President
                  </Typography>
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="ui/ux review check"
              class="object-cover object-center w-auto rounded-lg h-auto"
            />
            <div class="block mt-5 font-sans text-sm antialiased font-normal leading-normal text-center text-inherit">
              <div className="flex float-right">
                <IconButton
                  size="sm"
                  color=""
                  variant="text"
                  className="rounded-full"
                >
                  <BookmarkIcon class="h-6 w-6 float-right" />
                </IconButton>
              </div>
              <div className="flex mt-5">
                <IconButton
                  size="sm"
                  color="red"
                  variant="text"
                  className="rounded-full"
                >
                  <HeartIcon class="h-6 w-6 float-left" />
                </IconButton>
                <IconButton
                  size="sm"
                  color=""
                  variant="text"
                  className="rounded-full"
                  onClick={handleOpen}
                >
                  <ChatBubbleOvalLeftEllipsisIcon class="h-6 w-6 float-left" />
                </IconButton>
                <IconButton
                  size="sm"
                  color=""
                  variant="text"
                  className="rounded-full"
                >
                  <ExclamationCircleIcon class="h-6 w-6 float-left" />
                </IconButton>
              </div>
              <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
                1,000 Likes
              </div>
              <div class="ml-2 block mt-0 font-sans text-sm antialiased font-bold leading-normal text-left">
                CaptionCaptionCaptionCaptionCaptionCaption
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default TrendingPostcard;
