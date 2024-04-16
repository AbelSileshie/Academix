import React from "react";

const Post = ({ post }) => {
  return (
    <div className="bg-[#C2D2F9] p-4 rounded-[20px] shadow-sm mb-4 h-[200px] md:h-[250px] w-[150px] md:w-[300px] overflow-hidden">
      <p className="text-lg font-bold">{post.title}</p>
      <p className="text-gray-900 ">{post.content}</p>
    </div>
  );
};

export default Post;
