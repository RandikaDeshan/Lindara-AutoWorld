import React from "react";
import PartsBg from "../assets/partsbg.webp";
import { FaSearch } from "react-icons/fa";

const Parts_Page = () => {
  return (
    <div className=" w-full h-full">
      <div
        className=" w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${PartsBg})`,
        }}
      >
        <div className=" w-full h-full px-20 pt-50 pb-20 bg-black/70">
          <p className=" text-4xl text-white font-bold">
            Explore Our Spare Parts
          </p>
          <p className=" text-blue-300 mt-4">
            Find quality parts by product, brand, part number or vehicle.
          </p>
        </div>
      </div>
      <div className=" w-full px-20 py-30">
        <div className=" w-full flex items-center justify-between gap-10">
          <div className=" w-full h-12 px-5 flex items-center space-x-3  rounded-sm border border-blue-300 bg-blue-50">
            <FaSearch className=" text-blue-800" />
            <input
              type="text"
              className=" p-2  outline-none w-full"
              placeholder="Search by part name, brand, or vehicle..."
            />
          </div>
          <div className=" w-60 h-12 border border-blue-300 bg-blue-50 p-2 rounded-sm flex items-center justify-center">
            <select
              name=""
              id=""
              className=" outline-none w-60 h-12  text-blue-700"
            >
              <option value="new" className="bg-blue-50 text-blue-900">
                New
              </option>
              <option value="used" className="bg-blue-50 text-blue-900">
                Used
              </option>
              <option value="refurbished" className="bg-blue-50 text-blue-900">
                Refurbished
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts_Page;
