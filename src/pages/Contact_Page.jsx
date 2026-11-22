import React from "react";
import ContactBg from "../assets/contactbg.webp";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaLongArrowAltRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

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
            Call, message or visit us—we’re ready to help identify the right
            part.
          </p>
        </div>
      </div>
      <div className=" w-full h-full px-20 py-30">
        <div className=" w-full flex justify-between space-x-20">
          <div className=" w-full h-full">
            <p className=" text-blue-600 uppercase mb-8 text-sm font-semibold tracking-widest">
              GET IN TOUCH
            </p>
            <p className=" text-4xl font-semibold ">We’re Here to Help</p>
            <div className=" flex space-x-3 items-center mt-10">
              <div className=" p-3 bg-blue-100 text-blue-400  rounded-sm">
                <FaLocationDot />
              </div>
              <p className=" text-blue-700">
                No. 00, Main Road, Colombo, Sri Lanka
              </p>
            </div>
            <div className=" flex space-x-3 items-center mt-5">
              <div className=" p-3 bg-blue-100 text-blue-400  rounded-sm">
                <FaPhoneAlt />
              </div>
              <p className=" text-blue-700">+94 XX XXX XXXX</p>
            </div>
            <div className=" flex space-x-3 items-center mt-5">
              <div className=" p-3 bg-blue-100 text-blue-400  rounded-sm">
                <FaClock />
              </div>
              <p className=" text-blue-700">Mon–Sat: 8:30 AM–6:00 PM</p>
            </div>
            <div className=" mt-8 flex space-x-3 text-white justify-center items-center w-70 py-3 bg-red-500 rounded-lg font-semibold">
              <FaWhatsapp />
              <p>Message on WhatsApp</p>
            </div>
            <div className=" w-full h-60 mt-15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15823.705181626014!2d80.04606759999999!3d7.4733916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2d9bae1806e5d%3A0xdeaaab4c8b8ae97!2sKuliyapitiya!5e0!3m2!1sen!2slk!4v1795369325788!5m2!1sen!2slk"
                allowfullscreen=""
                loading="lazy"
                className=" w-full h-full"
                referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
          <div className=" w-300 p-10 h-full bg-red-100">
            <form action="">
              <p className=" text-2xl font-semibold mb-5">Send an Enquiry</p>
              <label htmlFor="name" className="text-sm">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className=" mt-3 text-sm w-full px-5 py-2 bg-red-50 border border-gray-300 rounded-sm"
              />
              <label htmlFor="phone" className="text-sm block mt-5">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="phone"
                required
                placeholder="+94 XX XXX XXXX"
                className=" mt-3 text-sm w-full px-5 py-2 bg-red-50 border border-gray-300 rounded-sm"
              />
              <label htmlFor="email" className="text-sm block mt-5">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@gmail.com"
                className=" mt-3 text-sm w-full px-5 py-2 bg-red-50 border border-gray-300 rounded-sm"
              />
              <label htmlFor="message" className="text-sm block mt-5">
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Tell us the part or vehicle details..."
                rows={5}
                className=" mt-3 text-sm w-full px-5 py-2 bg-red-50 border border-gray-300 rounded-sm"
              ></textarea>
              <button className=" flex items-center w-full py-3 bg-red-500 justify-center space-x-2 rounded-lg mt-5 text-white font-semibold">
                <p>Send Enquiry</p>
                <FaLongArrowAltRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Page;
