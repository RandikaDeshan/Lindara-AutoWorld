import React from "react";
import PartsBg from "../assets/partsbg.webp";

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
      <div className=" w-full px-20 py-30"></div>
    </div>
  );
};

export default Parts_Page;
