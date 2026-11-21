import React from 'react'
import BrandBg from "../assets/brandbg.webp";

const Brands_Page = () => {
  return (
    <div className=" w-full h-full">
          <div
            className=" w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${BrandBg})`,
            }}
          >
            <div className=" w-full h-full px-20 pt-50 pb-20 bg-black/70">
              <p className=" text-4xl text-white font-bold">
                Browse by Vehicle Brand
              </p>
              <p className=" text-blue-300 mt-4">
                Explore parts for popular makes driven across Sri Lanka.
              </p>
            </div>
          </div>
          <div className=" w-full h-full px-20 py-30"></div>
        </div>
  )
}

export default Brands_Page