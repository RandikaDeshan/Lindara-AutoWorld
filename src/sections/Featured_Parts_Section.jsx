import Part_Card from "@/components/Part_Card";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Featured_Parts_Section = () => {
  return (
    <div className=" w-full h-full px-20 pt-30 pb-20 bg-blue-50">
      <div className=" w-full flex justify-between items-end">
        <div>
          <p className=" text-blue-600 uppercase mb-8 text-sm font-semibold tracking-widest">
            POPULAR RIGHT NOW
          </p>
          <p className=" text-4xl font-semibold">Featured Spare Parts</p>
          <p className=" mt-3 text-gray-600">
            Carefully presented products for popular vehicles in Sri Lanka.
          </p>
        </div>
        <div className=" cursor-pointer flex space-x-3 items-center text-red-600 font-semibold">
          <p>View full catalogue</p>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div className=" w-full h-full grid grid-cols-4 gap-5 mt-15">
        <Part_Card />
        <Part_Card />
        <Part_Card />
        <Part_Card />
      </div>
      <p className=" text-gray-400 text-xs text-center mt-10">
        Prices and availability shown are illustrative. Please confirm current
        stock and final price with our team via WhatsApp.
      </p>
    </div>
  );
};

export default Featured_Parts_Section;
