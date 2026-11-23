import React from "react";
import BrandBg from "../assets/brandbg.webp";
import Engine from "../assets/engine-parts.webp";
import Brake from "../assets/brake.webp";
import Air from "../assets/filter.webp";
import Steering from "../assets/steering.webp";
import Elecparts from "../assets/electricalparts.webp";
import Bodyparts from "../assets/bodyparts.webp";
import Coolingsys from "../assets/coolingsys.webp";
import Transmission from "../assets/transmission.webp";

const Brands_Page = () => {
  const categories = [
    {
      id: "01",
      name: "Engine Parts",
      image: Engine,
      link: "",
    },
    {
      id: "02",
      name: "Brake Systems",
      image: Brake,
      link: "",
    },
    {
      id: "03",
      name: "Oil & AIr Filters",
      image: Air,
      link: "",
    },
    {
      id: "04",
      name: "Suspension & Steering",
      image: Steering,
      link: "",
    },
    {
      id: "05",
      name: "Electrical Components",
      image: Elecparts,
      link: "",
    },
    {
      id: "06",
      name: "Body Parts",
      image: Bodyparts,
      link: "",
    },
    {
      id: "07",
      name: "Cooling System",
      image: Coolingsys,
      link: "",
    },
    {
      id: "08",
      name: "Transmission",
      image: Transmission,
      link: "",
    },
  ];

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
      <div className=" w-full h-full px-20 py-30">
        <div className="w-full mt-15 grid grid-cols-4 gap-3">
          {categories.map((category) =>
            category.id === "01" ? (
              <div className="col-span-2 w-full h-70 rounded-xl relative overflow-hidden group cursor-pointer">
                <div className=" w-full h-full flex items-end p-10 space-x-3 bg-black/50 absolute z-10 transition-colors duration-500 group-hover:bg-black/60">
                  <p className=" text-blue-300 text-sm">{category.id}</p>
                  <div>
                    <p className=" text-white font-semibold">{category.name}</p>
                    <p className="text-red-300 text-xs mt-1 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                      Explore More →
                    </p>
                  </div>
                </div>
                <img
                  src={category.image}
                  alt="Engine Parts"
                  className=" w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            ) : (
              <div className=" w-full h-70 rounded-xl relative overflow-hidden group cursor-pointer">
                <div className=" w-full h-full flex items-end p-10 space-x-3 bg-black/50 absolute z-10 transition-colors duration-500 group-hover:bg-black/60">
                  <p className=" text-blue-300 text-sm">{category.id}</p>
                  <div>
                    <p className=" text-white font-semibold">{category.name}</p>
                    <p className="text-red-300 text-xs mt-1 opacity-0 translate-y-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                      Explore More →
                    </p>
                  </div>
                </div>
                <img
                  src={category.image}
                  alt="Engine Parts"
                  className=" w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Brands_Page;
