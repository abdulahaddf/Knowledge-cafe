import React from 'react';

const Nav = () => {
    return (
        <div className='flex justify-between h-5 w-full mb-9'>
            <div >
                <h1 className='text-xl font-extrabold'>Knowledge Cafe</h1>
            </div>
            <div>
                <img src="user.jpg" alt="" className='w-10 rounded-full' />
            </div>
            
        </div>
    );
};

export default Nav;