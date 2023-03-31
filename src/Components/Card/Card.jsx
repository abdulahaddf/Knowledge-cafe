import React, { useState } from "react";
import { useEffect } from "react";
import Bookmark from "../Bookmark/Bookmark";
import SingleCard from "../SingleCard/SingleCard";
import Time from "../Time/Time";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("fakeDb.json").then((res) =>
      res.json().then((data) => setBlog(data))
    );
  }, []);

  const [time, setTime] = useState("");

  const handleTime = (readTime) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = parseInt(previousReadTime) + parseInt(readTime);
      localStorage.setItem("readTime", sum);
      setTime(sum);
    } else {
      localStorage.setItem("readTime", readTime);
      setTime(readTime);
    }
  };
  const [bookmark, setBookmark] = useState([]);

  const notify = () => {
    toast("This blog is already bookmarked!");
  };

  const handleBookmark = (title) => {
    if (bookmark.includes(title)) {
      notify();
    //   const bookmarks = [...bookmark, title];
    //   setBookmark(bookmarks);
    } else {
      const bookmarks = [...bookmark, title];
      setBookmark(bookmarks);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-evenly ">
      <div>
        {blogs.map((blog) => (
          <SingleCard
            blog={blog}
            handleTime={handleTime}
            handleBookmark={handleBookmark}
            key={blog.id}
          ></SingleCard>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="h-14">
          <Time time={time}></Time>
        </div>
        <div className="h-36 mt-32 ">
          <Bookmark bookmark={bookmark}></Bookmark>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Card;
