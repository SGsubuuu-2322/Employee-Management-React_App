// import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-20 bg-zinc-100 flex items-center justify-between p-10">
      <h1 className="hover:text-red-500 text-2xl font-semibold ">Socielite</h1>
      <ul className="flex gap-20">
        <li className="text-xl font-medium">Home</li>
        <li className="text-xl font-medium">About</li>
        <li className="text-xl font-medium">Services</li>
        <li className="text-xl font-medium">Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
