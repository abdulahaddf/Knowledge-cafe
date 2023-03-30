import React, { useState } from 'react';
import { useEffect } from 'react';
import Bookmark from '../Bookmark/Bookmark';
import SingleCard from '../SingleCard/SingleCard';
import Time from '../Time/Time';

const Card = () => {
    const [blogs, setBlog] = useState([]);
    useEffect((()=>{
        fetch('fakeDb.json')
        .then(res => res.json()
        .then(data => setBlog(data))
        )
    }),[]);


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
    return (
        <div className='flex justify-evenly'>
            <div className='w-9/12' >
                {blogs.map(blog => 
                    (<SingleCard blog={blog} handleTime={handleTime} key={blog.id}></SingleCard>)   
                )}
            </div>
            <div className='flex flex-col h-3/4'>
                <div className='h-14'>
                    <Time time={time}></Time>
                </div>
                <div className='h-36'>
                    <Bookmark></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Card;