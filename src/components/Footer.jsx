import React from "react";
import {FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiGolfBallLine } from "react-icons/ri";

const Footer = () => {
  const footerNavs = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "#",
      name: "Team",
    },
    {
      href: "#",
      name: "Careers",
    },
    {
      href: "#",
      name: "Support",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 mt-4 max-w-screen-xl mx-auto md:px-8 border border-x-0 border-b-0 border-gray-500">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <span
          className="flex items-center justify-center text-black font-bold text-3xl font-[Poppins]"
        >
          <span>G</span>
          <RiGolfBallLine className="text-green-800 ml-0 -mr-2" />
          <span className="ml-2">lf Gear</span>
        </span>
        <p className="leading-relaxed mt-2 text-[15px]">
        Discover the perfect blend of quality and value with our range of golf gear. Each item is selected to meet the needs of golfers at all levels, ensuring you get the best performance and durability on the course.
        </p>
      </div>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 Golf Gear All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#">
                <FaWhatsapp className="text-green-700 hover:text-green-500 w-7 h-7" />
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#">
                <FaInstagram className="text-red-700 hover:text-red-500 w-7 h-7" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
