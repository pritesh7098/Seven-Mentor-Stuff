import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white ">
      <h1>SevenMentors</h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-400 ">Home</a>
        <a href="#" className="hover:text-gray-400 ">About</a>
        <a href="#" className="hover:text-gray-400 ">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
