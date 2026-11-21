import React from "react";
import ContactBg from "../assets/contactbg.webp";

const Contact_Page = () => {
  return (
    <div className=" w-full h-full">
      <div
        className=" w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${ContactBg})`,
        }}
      >
        <div className=" w-full h-full px-20 pt-50 pb-20 bg-black/70">
          <p className=" text-4xl text-white font-bold">
            Talk to Our Parts Team
          </p>
          <p className=" text-blue-300 mt-4">
            Call, message or visit us—we’re ready to help identify the right part.
          </p>
        </div>
      </div>
      <div className=" w-full h-full px-20 py-30"></div>
    </div>
  );
};

export default Contact_Page;
