import React from "react";
import AboutBg from "../assets/aboutbg.webp";
import AboutImg from "../assets/aboutusimg.webp";
import { TiTick } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

const About_Us_Page = () => {
  return (
    <div className=" w-full h-full">
      <div
        className=" w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${AboutBg})`,
        }}
      >
        <div className=" w-full h-full px-20 pt-50 pb-20 bg-black/70">
          <p className=" text-4xl text-white font-bold">
            Parts Expertise, Built Around Drivers
          </p>
          <p className=" text-blue-300 mt-4">
            An editable introduction to your automotive spare parts business.
          </p>
        </div>
      </div>
      <div className=" w-full px-20 py-30 flex items-center justify-between space-x-20">
        <div className=" w-1/2 h-full">
          <img src={AboutImg} alt="" className=" w-full h-120 object-cover" />
        </div>
        <div className=" w-1/2 h-full">
          <p className=" text-blue-600 uppercase mb-8 text-sm font-semibold tracking-widest">
            OUR STORY
          </p>
          <p className=" text-4xl font-semibold ">
            A More Helpful Way to Find Car Parts
          </p>
          <p className=" mt-5 text-gray-700">
            AutoParts Lanka is a customizable placeholder brand created for a
            Sri Lankan spare parts business. Replace this copy with your shop
            story, experience, sourcing approach and customer promise.
          </p>
          <p className=" mt-1 text-gray-700">
            Our catalogue-led experience helps customers discover parts, check
            likely compatibility and speak directly with a knowledgeable team
            member before ordering.
          </p>
          <div className=" flex space-x-3 items-center mt-5">
            <TiTick className=" text-red-500"/>
            <p className=" text-sm font-semibold">Editable quality commitment</p>
          </div>
          <div className=" flex space-x-3 items-center mt-3">
            <TiTick className=" text-red-500"/>
            <p className=" text-sm font-semibold">Wide product range</p>
          </div>
          <div className=" flex space-x-3 items-center mt-3">
            <TiTick className=" text-red-500"/>
            <p className=" text-sm font-semibold">Personal fitment assistance</p>
          </div>
          <div className=" mt-8 flex space-x-3 text-white justify-center items-center w-50 py-3 bg-red-500 rounded-lg font-semibold">
            <FaWhatsapp/>
            <p>Talk to Our Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Us_Page;
