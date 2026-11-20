import React, { useEffect, useState } from "react";
import Logo from "../assets/newlogo.png";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className=" w-full fixed">
      <div
        className={` px-20 w-full py-2 bg-blue-800 flex justify-between items-center transition-all duration-300 ${scrolled ? "hidden" : "block"}`}
      >
        <div className=" flex items-center space-x-3 text-xs text-blue-200 font-semibold">
          <p>Quality Car Spare Parts</p>
          <div className=" w-1 h-1 rounded-full bg-blue-300"></div>
          <p>Serving Customers Across Sri Lanka</p>
        </div>
        <div className=" flex space-x-3 items-center text-xs text-blue-200">
          <FaPhoneAlt />
          <p>+94 XX XXX XXXX</p>
        </div>
      </div>
      <div
        className={`w-full h-20 px-15 py-5 flex justify-between items-center bg-blue-950 ${scrolled ? "shadow-sm shadow-white/20" : "shadow-none"}`}
      >
        <div className=" flex space-x-3 items-center">
          <div className=" p-2 flex items-center justify-center  rounded-lg">
            <img src={Logo} alt="" className=" w-30 h-full object-cover" />
          </div>
        </div>
        <div className=" flex space-x-2 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className=" text-gray-300 font-bold py-2 px-4 cursor-pointer hover:text-red-500"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("home")}
            className=" text-gray-300 font-bold py-2 px-4 cursor-pointer hover:text-red-500"
          >
            Spare Parts
          </button>
          <button
            onClick={() => scrollToSection("home")}
            className=" text-gray-300 font-bold py-2 px-4 cursor-pointer hover:text-red-500"
          >
            Find by Vehicle
          </button>
          <button
            onClick={() => scrollToSection("home")}
            className=" text-gray-300 font-bold py-2 px-4 cursor-pointer hover:text-red-500"
          >
            Brands
          </button>
          <button
            onClick={() => scrollToSection("home")}
            className=" text-gray-300 font-bold py-2 px-4 cursor-pointer hover:text-red-500"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("home")}
            className=" text-gray-300 font-bold py-2 px-4 cursor-pointer hover:text-red-500"
          >
            Contact
          </button>
        </div>
        <button className=" flex items-center space-x-2 text-white font-bold cursor-pointer bg-linear-to-r to-red-800 from-red-500 px-5 py-3 rounded-lg hover:shadow-lg shadow-blue-300/30 hover:-translate-y-px">
          <FaWhatsapp/>
          <p>WhatsApp Us</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
