import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between h-5 w-full mb-9">
      <div>
        <h1 className="text-xl font-extrabold">Knowledge Point</h1>
      </div>
      <div>
        <img src="user.jpg" alt="" className="w-12 rounded-full" />
      </div>
    </div>
  );
};

export default Nav;
