import React from 'react'
import FindByBg from "../assets/findbybg2.webp";

const Find_By_Vehicle_Page = () => {
  return (
    <div className=" w-full h-full">
          <div
            className=" w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${FindByBg})`,
            }}
          >
            <div className=" w-full h-full px-20 pt-50 pb-20 bg-black/70">
              <p className=" text-4xl text-white font-bold">
                Find Parts for Your Vehicle
              </p>
              <p className=" text-blue-300 mt-4">
                Start with your vehicle details for more relevant results.
              </p>
            </div>
          </div>
          <div className=" w-full h-full px-20 py-30"></div>
        </div>
  )
}

export default Find_By_Vehicle_Page