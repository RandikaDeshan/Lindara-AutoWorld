import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../assets/newlogo.png";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full h-full px-10 pt-15 pb-5 bg-blue-950">
      <div className=" w-full flex justify-between space-x-10">
        <div>
          <img src={Logo} alt="" className=" w-50" />
          <p className=" text-sm text-blue-300 w-80 mt-3">
            Your trusted destination for quality automotive spare parts and
            friendly fitment guidance in Sri Lanka.
          </p>
          <div className=" flex space-x-2 items-center mt-3">
            <div className=" p-2 border border-blue-600 text-blue-500">
              <FaFacebookF />
            </div>
            <div className=" p-2 border border-blue-600 text-blue-500">
              <FaInstagram />
            </div>
            <div className=" p-2 border border-blue-600 text-blue-500">
              <FaTiktok />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 ">
          <p className=" font-semibold text-white mb-10">Quick Links</p>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm hover:text-red-500 cursor-pointer ${isActive ? "text-red-500" : "text-blue-300"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/parts"
            className={({ isActive }) =>
              `text-sm hover:text-red-500 cursor-pointer ${isActive ? "text-red-500" : "text-blue-300"}`
            }
          >
            Spare Parts
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `text-sm hover:text-red-500 cursor-pointer ${isActive ? "text-red-500" : "text-blue-300"}`
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm hover:text-red-500 cursor-pointer ${isActive ? "text-red-500" : "text-blue-300"}`
            }
          >
            About Us
          </NavLink>
        </div>
        <div>
          <p className=" font-semibold text-white mb-10">Categories</p>
          <p className=" text-blue-300 text-sm">Engine Parts</p>
          <p className=" text-blue-300 text-sm mt-2">Brake System</p>
          <p className=" text-blue-300 text-sm mt-2">Filters</p>
          <p className=" text-blue-300 text-sm mt-2">Suspension</p>
          <p className=" text-blue-300 text-sm mt-2">Electrical</p>
          <p className=" text-blue-300 text-sm mt-2">Cooling System</p>
        </div>
        <div>
          <p className=" font-semibold text-white mb-10">Contact</p>
          <div className=" flex space-x-3 text-blue-300 text-sm">
            <FaLocationDot />
            <p>
              No. 00, Main Road, <br />
              Colombo, Sri Lanka
            </p>
          </div>
          <div className=" flex space-x-3 text-blue-300 text-sm mt-2">
            <FaPhoneAlt />
            <p>+94 XX XXX XXXX</p>
          </div>
          <div className=" flex space-x-3 text-blue-300 text-sm mt-2">
            <FaClock />
            <p>Mon–Sat, 8:30–18:00</p>
          </div>
          <div className=" mt-5 flex space-x-3 text-white justify-center items-center w-40 text-xs py-3 bg-red-500 rounded-lg font-semibold">
            <FaWhatsapp />
            <p>Chat on WhatsApp</p>
          </div>
        </div>
      </div>
      <div className=" w-full h-px bg-blue-400 my-10"></div>
      <p className=" text-xs text-blue-300 text-center">
        © 2026 Lindara Autoworld Pvt Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
