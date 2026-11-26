import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Engine from "../assets/engine-parts.webp";
import { useNavigate } from "react-router-dom";

const Part_Details_Page = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full h-full p-20">
      <div className=" w-full pt-20">
        <div
          onClick={() => navigate(-1)}
          className=" flex items-center space-x-2 cursor-pointer text-gray-600 text-sm"
        >
          <FaLongArrowAltLeft />
          <p>Back</p>
        </div>
        <div className=" w-full flex space-x-10 mt-10">
          <div className=" w-full">
            <div className=" w-130 h-130 overflow-hidden border-4 border-red-200">
              <img
                src={Engine}
                alt="product image"
                className=" w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <div className=" w-full">
            <div className=" p-2 bg-red-100 flex items-center justify-center w-34 rounded-full space-x-2">
              <div className=" w-1 h-1 bg-red-500 rounded-full"></div>
              <p className=" text-[10px] text-red-600">Available on enquiry</p>
            </div>
            <p className=" text-blue-600 uppercase mb-3 mt-5 text-xs font-semibold tracking-widest">
              honda
            </p>
            <p className=" text-4xl font-semibold ">Honda Premium Air Filter</p>
            <div className=" w-full h-px bg-gray-300 my-5"></div>
            <p className=" text-[10px] text-gray-600">Illustrative price</p>
            <p className=" mt-1 text-2xl font-bold">Rs. 2,500.00</p>
            <p className=" text-[10px] text-gray-600 mt-1">
              Final price confirmed on enquiry
            </p>
            <p className=" text-sm text-gray-600 mt-2">
              A quality replacement component selected for compatible vehicle
              applications. Built for reliable everyday performance and supplied
              with clearly listed fitment information.
            </p>
            <div className=" w-full flex justify-between items-center mt-10">
              <p className=" text-sm font-semibold">Quantity</p>
              <div className=" flex space-x-4 items-center text-sm border border-gray-500 px-2 py-1">
                <p>+</p>
                <p>1</p>
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part_Details_Page;
