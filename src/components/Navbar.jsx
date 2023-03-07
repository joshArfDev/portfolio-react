import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex w-full justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
        <h1 className="w-full text-3xl font-bold text-[#9ABBEB]">joshuaDev</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="Hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-4">
          <Link to="Portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="p-4">
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={ 
          nav
            ? "fixed left-0 top-0 w-full h-full border-r border-r-gray-900 bg-[#3E4098] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        

        <h1 fixed className=" w-full text-3xl font-bold text-[#9ABBEB] mt-3.5 ml-3.5">joshuaDev</h1>
        <ul className="uppercase p-14 text-center">
          <li className="p-4 border-b border-gray-600">
            <Link onClick={handleNav} to="Hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link onClick={handleNav} to="About" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link onClick={handleNav} to="Skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link onClick={handleNav} to="Portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="p-4">
            <Link onClick={handleNav} to="Contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
