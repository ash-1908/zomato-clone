import React from "react";

//icons
import {FaUserAlt} from "react-icons/fa";

const MobileNav = () => {
  return <div className="flex justify-between items-center">
    <div className="w-24">
        <img src="https://ops.runnr.in/assets/zomato_logo_black-72e759139bb73d92afb5f8ae0b2485b7cb023a5474859f2b6e22fdd8b83d2fc0.png" alt="Logo" className="w-full h-full" />
      </div>
      <div className="flex items-center">
        <button className="bg-zred-400 text-white px-3 py-2 rounded-full">
          Use App
        </button>
        <span className="border border-gray-300 text-zred-400 rounded-full p-2 ml-2">
          <FaUserAlt/>
          </span>
      </div>
  </div>
};

const Navbar = () => {
  return <>
    <nav className="p-4 bg-white  shadow-md">
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  </>;
};

export default Navbar;