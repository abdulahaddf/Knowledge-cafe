import React, { useEffect, useState } from 'react';

const Time = ({time}) => {
const [rt, setRt] = useState(time);
    useEffect(() => {
        const getTime = localStorage.getItem("readTime");
        setRt(getTime);
       
      }, [time]);
      
    return (
        <div>
            <h3 className='text-2xl font-semibold my-6'>Read Time: {rt}</h3>
        </div>
    );
};

export default Time;