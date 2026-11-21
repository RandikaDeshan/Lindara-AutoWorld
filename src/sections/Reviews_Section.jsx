import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews_Section = () => {
  return (
    <div className=" w-full h-full px-20 pt-30 pb-20 bg-blue-50 flex items-center justify-between space-x-30">
      <div className=" w-full h-full">
        <p className=" text-blue-600 uppercase mb-8 text-sm font-semibold tracking-widest">
          CUSTOMER STORIES
        </p>
        <p className=" text-4xl font-semibold ">
          Trusted by Drivers Across Sri Lanka
        </p>
        <p className=" text-sm text-gray-500 mt-3">
          Editable customer testimonial placeholders for your verified reviews.
        </p>
        <div className=" flex items-center space-x-3 mt-8">
          <p className=" text-4xl font-bold">4.9</p>
          <div>
            <div className=" flex space-x-1 items-center text-yellow-500 text-xs">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className=" mt-1 text-xs text-gray-500">Placeholder rating</p>
          </div>
        </div>
      </div>
      <div className=" w-400 h-full p-10 border-l-4 border-l-blue-600 bg-white drop-shadow-xl drop-shadow-black/10">
        <p className=" text-xl font-semibold">
          “The team helped me identify the correct filter for my Toyota Axio
          quickly. Clear communication and a very easy WhatsApp ordering
          process.”
        </p>
        <p className=" mt-10 font-semibold text-sm">N. Perera</p>
        <p className=" text-xs text-gray-500">Colombo · Sample testimonial</p>
      </div>
    </div>
  );
};

export default Reviews_Section;
