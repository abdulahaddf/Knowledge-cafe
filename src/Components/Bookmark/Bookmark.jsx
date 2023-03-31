import React, { useState } from 'react';
import { useEffect } from 'react';

const Bookmark = ({bookmark}) => {
    
    // console.log(bookmark);
//     const [sbm, setSbm] = useState('')
//     useEffect((()=>{
// if(bookmark){
// console.log("ache");

// }
// else{
// console.log('nai');
// }
//     }),[bookmark])
    return (
        <div className='card w-96 glass h-96 p-4'>
            <h2 className='text-2xl font-semibold'>Bookmarked Blogs:</h2>
           
            {bookmark.map((title, index) => (
  <div key={index} className="bg-gray-300 my-2 p-2">
    {title}
  </div>
))}
                
              
           
            
           
        </div>
    );
};

export default Bookmark;