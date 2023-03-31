import React, { useState } from "react";
import { useEffect } from "react";

const Bookmark = ({ bookmark }) => {
  
  return (
    <div className="card w-96 h-96 mx-auto p-4 bg-gray-300 shadow-xl ">
      <h2 className="text-2xl font-semibold">
        Bookmarked Blogs: {bookmark.length}
      </h2>

      {bookmark.map((title, index) => (
        <div
          key={index}
          className="bg-white rounded-md my-2 p-2 text-xl font-medium"
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default Bookmark;
