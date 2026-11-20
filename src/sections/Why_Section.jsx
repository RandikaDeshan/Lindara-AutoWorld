import React from "react";
import WhyBg from "../assets/whybg2.webp";
import { AiOutlineSafety } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";
import { FaCar, FaTruck, FaWhatsapp } from "react-icons/fa";

const Why_Section = () => {
  return (
    <div className=" w-full h-full px-20 pb-20 pt-30 bg-blue-950 flex justify-between items-center gap-15">
      <div className=" w-1/2 h-140 rounded-sm overflow-hidden">
        <img src={WhyBg} alt="" className=" w-full h-full object-cover" />
      </div>
      <div className=" w-1/2 h-full">
        <p className=" text-blue-600 uppercase mb-8 text-sm font-semibold tracking-widest">
          WHY AUTOPARTS LANKA
        </p>
        <p className=" text-4xl font-semibold text-white">
          Confidence in Every Part You Choose
        </p>
        <p className=" mt-5 text-blue-300">
          We make it easier to identify and enquire about the right part—without
          the uncertainty. All service claims are editable to match your
          business.
        </p>
        <div className=" w-full flex justify-between gap-10 mt-10">
          <div className=" w-1/2 h-full space-y-8">
            <div className=" flex w-full space-x-2 items-start">
              <div className=" rounded-lg bg-blue-800 p-3 text-blue-200">
                <AiOutlineSafety />
              </div>
              <div>
                <p className=" text-white font-semibold">Quality Spare Parts</p>
                <p className=" text-xs text-blue-400 mt-1">
                  Clear information and helpful guidance from enquiry to
                  collection.
                </p>
              </div>
            </div>
            <div className=" flex w-full space-x-2 items-start">
              <div className=" rounded-lg bg-blue-800 p-3 text-blue-200">
                <MdHeadsetMic />
              </div>
              <div>
                <p className=" text-white font-semibold">
                  Friendly Customer Care
                </p>
                <p className=" text-xs text-blue-400 mt-1">
                  Clear information and helpful guidance from enquiry to
                  collection.
                </p>
              </div>
            </div>
            <div className=" flex w-full space-x-2 items-start">
              <div className=" rounded-lg bg-blue-800 p-3 text-blue-200">
                <FaTruck />
              </div>
              <div>
                <p className=" text-white font-semibold">Islandwide Delivery</p>
                <p className=" text-xs text-blue-400 mt-1">
                  Clear information and helpful guidance from enquiry to
                  collection.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-1/2 h-full space-y-8">
            <div className=" flex w-full space-x-2 items-start">
              <div className=" rounded-lg bg-blue-800 p-3 text-blue-200">
                <FaCar />
              </div>
              <div>
                <p className=" text-white font-semibold">
                  Vehicle Fitment Support
                </p>
                <p className=" text-xs text-blue-400 mt-1">
                  Clear information and helpful guidance from enquiry to
                  collection.
                </p>
              </div>
            </div>
            <div className=" flex w-full space-x-2 items-start">
              <div className=" rounded-lg bg-blue-800 p-3 text-blue-200">
                <FaWhatsapp />
              </div>
              <div>
                <p className=" text-white font-semibold">Simple WhatsApp Ordering</p>
                <p className=" text-xs text-blue-400 mt-1">
                  Clear information and helpful guidance from enquiry to
                  collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_Section;
