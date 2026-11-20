import React from "react";
import Heroimg from "../assets/herobgimg.webp";
import { FaLongArrowAltRight, FaSearch, FaTruck } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";

const Hero_Section = () => {
  return (
    <div className=" w-full h-full relative">
      <div className=" w-full h-185">
        <div className=" w-full h-full relative">
          <div className="absolute z-10 w-full h-full px-5 md:px-10 lg:px-20 pt-50 bg-black/50">
            <div className=" w-full md:w-1/2 h-full">
              <p className=" text-red-500 md:text-sm text-xs uppercase">
                - your trusted gateway to european auto parts -
              </p>
              <p className=" text-white text-4xl md:text-6xl md:w-120 leading-12 lg:leading-20 mt-3 font-bold">
                Find the Right Spare Parts for <br />{" "}
                <span className=" text-blue-500">Your Vehicle.</span>
              </p>
              <p className=" mt-3 text-blue-200">
                Explore quality car spare parts from trusted brands. Find
                compatible parts and order easily through WhatsApp.
              </p>
              <div className=" flex items-center space-x-3 mt-7">
                <div className=" text-white flex items-center space-x-2 rounded-lg px-5 py-3 border border-blue-800 bg-blue-600">
                  <p>Explore Spare Parts</p>
                  <FaLongArrowAltRight />
                </div>
                <div className=" text-white rounded-lg px-5 py-3 border border-gray-400 bg-gray-600">
                  <p>Find Parts by Vehicle</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  w-full h-full">
            <img
              src={Heroimg}
              alt="Hero Image"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className=" w-full pt-15 px-30 pb-8 border-b border-b-blue-200 h-full flex justify-between items-end">
        <div className=" flex space-x-3 items-center">
          <AiOutlineSafety className=" text-blue-500 text-xl"/>
          <div className="">
            <p className="font-semibold">Quality-focused sourcing</p>
            <p className=" text-sm">Product details clearly listed</p>
          </div>
        </div>
        <div className=" w-px h-10 bg-blue-200"></div>
        <div className=" flex space-x-3 items-center">
          <MdHeadsetMic className=" text-blue-500 text-xl"/>
          <div className="">
            <p className="font-semibold">Compatibility assistance</p>
            <p className=" text-sm">Help choosing the correct part</p>
          </div>
        </div>
        <div className=" w-px h-10 bg-blue-200"></div>
        <div className=" flex space-x-3 items-center">
          <FaTruck className=" text-blue-500 text-xl"/>
          <div className="">
            <p className="font-semibold">Delivery options</p>
            <p className=" text-sm">Islandwide service if available</p>
          </div>
        </div>
      </div>
      <div className=" absolute z-20 w-210 -translate-x-1/2 left-1/2 top-178 h-15 drop-shadow-xl drop-shadow-black/20 rounded-lg bg-white">
        <form action="" className=" flex items-center justify-between w-full h-full px-5">
          <div className=" flex items-center">
            <FaSearch className=" text-gray-600"/>
          <input type="text" placeholder="Search by part name, brand, or vehicle..." className=" w-120 px-3 py-2 outline-none"/>
          </div>
          <button className=" px-5 py-3 rounded-lg text-white bg-red-600">Search Parts</button>
        </form>
      </div>
    </div>
  );
};

export default Hero_Section;
