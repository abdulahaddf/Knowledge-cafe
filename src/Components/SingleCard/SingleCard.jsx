import React, { useState } from "react";
import { useEffect } from "react";

const SingleCard = (props) => {
  const { images, title, read_time, author, publish_date } = props.blog;
const handleTime = props.handleTime;
const handleBookmark = props.handleBookmark;
// const [time, setTime] = useState("");






  return (
    <>
      <div className="card max-w-lg bg-base-100 shadow-xl my-3 p-5">
        <div>
          <img className="w-200 rounded-xl" src={images.cover} alt="" />
        </div>

        <div>
          <div className="flex justify-between p-3 my-2">
            <div className="flex w-48">
              <img className="w-10 rounded-full p-1" src={images.author} alt="" />
                 <div className="ms-3">
                   <h4 className="font-bold text-base">{author}</h4>
                   <p>{publish_date}</p>
                  </div>
            </div>
            <div>{read_time} min read <button onClick={()=>handleBookmark(title)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</button></div>
          </div>

        </div>

          <div className="text-left">
             <h3 className="text-2xl font-bold">{title}</h3>
             <button onClick={()=>handleTime(read_time)} className="btn btn-link p-0">Mark as read</button>
          </div>


      </div>

    </>
  );
};

export default SingleCard;
