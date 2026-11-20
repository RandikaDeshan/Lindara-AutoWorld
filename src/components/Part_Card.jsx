import React from "react";
import Engine from "../assets/engine-parts.webp";
import Brake from "../assets/brake.webp";
import Air from "../assets/filter.webp";
import Steering from "../assets/steering.webp";
import { FaCar, FaWhatsapp } from "react-icons/fa";

const Part_Card = () => {
  return (
    <div className=" w-full h-123 rounded-xl bg-blue-50 border border-blue-200 overflow-hidden group hover:-translate-y-2 hover:drop-shadow-lg hover:drop-shadow-black/20 transition-all duration-700 ease-out">
      <div className=" w-full h-50 relative overflow-hidden">
        <div className=" absolute z-10 top-3 left-3 bg-white rounded-full px-3 py-1 flex space-x-2 items-center">
          <div className=" w-1 h-1 rounded-full bg-green-500"></div>
          <p className=" text-xs">Available on enquiry</p>
        </div>
        <img
          src={Engine}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className=" p-5">
        <p className=" uppercase text-blue-600 text-xs tracking-widest font-semibold">
          Toyota
        </p>
        <p className=" text-lg mt-2 font-semibold">Toyota Genuine Oil Filter</p>
        <p className=" text-[10px] mt-1 text-gray-400">Part No. TOY-12345</p>
        <div className=" w-full h-px bg-gray-400 my-3"></div>
        <div className=" flex space-x-2 my-1">
          <FaCar className="text-gray-400 text-xs" />
          <p className=" text-gray-400 text-xs">
            Axio, Allion, Premio · 2017–2022
          </p>
        </div>
        <div className=" w-full h-px bg-gray-400 my-3"></div>
        <p className=" text-gray-400 uppercase text-[10px]">
          Illustrative price
        </p>
        <p className=" text-2xl font-bold mt-2">Rs. 2,500.00</p>
        <div className=" w-full flex justify-between gap-2 items-center mt-3">
          <div className=" w-1/2 h-10 flex items-center justify-center text-sm bg-red-100 text-red-400 font-semibold rounded-lg border border-red-200">
            <p>View Details</p>
          </div>
          <div className=" w-1/2 h-10 flex items-center justify-center text-sm space-x-2 bg-red-500 text-white font-semibold rounded-lg border border-red-200">
            <FaWhatsapp />
            <p>Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part_Card;
