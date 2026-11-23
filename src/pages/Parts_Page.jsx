import React, { useEffect, useMemo, useState } from "react";
import PartsBg from "../assets/partsbg.webp";
import { FaSearch } from "react-icons/fa";
import CustomDropdown from "@/components/CustomDropdownn";
import FilterSidebar from "@/components/FilterSidebar";
import Part_Card from "@/components/Part_Card";

const Parts_Page = () => {
  const [condition, setCondition] = useState("new");

  const conditions = [
    { label: "Featured", value: "featured" },
    { label: "Newest", value: "newest" },
    { label: "Price Low to High", value: "lowtohigh" },
    { label: "Price High to Low", value: "hightolow" },
  ];
  const products = [
    {
      id: 1,
      name: "Toyota Genuine Oil Filter",
      brand: "Toyota",
      partNo: "TOY-12345",
      model: "Axio",
      year: "2015-2018",
      engine: "1.5L",
      vehicle: "Axio, Allion, Premio",
      image: "/images/oil-filter.webp",
    },
    {
      id: 2,
      name: "Honda Premium Air Filter",
      brand: "Honda",
      partNo: "HON-AF221",
      model: "Vezel",
      year: "2019-2021",
      engine: "1.5L",
      vehicle: "Vezel, Fit",
      image: "/images/air-filter.webp",
    },
    {
      id: 3,
      name: "Front Ceramic Brake Pad Set",
      brand: "BMW",
      partNo: "BMW-BP840",
      model: "Civic",
      year: "2015-2018",
      engine: "2.0L",
      vehicle: "BMW 3 Series",
      image: "/images/brake-pad.webp",
    },
    {
      id: 4,
      name: "Nissan Engine Oil Filter",
      brand: "Nissan",
      partNo: "NIS-1001",
      model: "Axio",
      year: "2022-2025",
      engine: "1.3L",
      vehicle: "Nissan Models",
      image: "/images/oil-filter.webp",
    },
    {
      id: 5,
      name: "Suzuki Air Filter",
      brand: "Suzuki",
      partNo: "SUZ-2001",
      model: "Allion",
      year: "2019-2021",
      engine: "1.0L",
      vehicle: "Suzuki Models",
      image: "/images/air-filter.webp",
    },
    {
      id: 6,
      name: "Toyota Brake Pad Set",
      brand: "Toyota",
      partNo: "TOY-3001",
      model: "Premio",
      year: "2015-2018",
      engine: "1.8L",
      vehicle: "Toyota Models",
      image: "/images/brake-pad.webp",
    },
    {
      id: 7,
      name: "Honda Engine Filter",
      brand: "Honda",
      partNo: "HON-4001",
      model: "Vezel",
      year: "2022-2025",
      engine: "1.5L",
      vehicle: "Honda Models",
      image: "/images/oil-filter.webp",
    },
    {
      id: 8,
      name: "Nissan Air Filter",
      brand: "Nissan",
      partNo: "NIS-5001",
      model: "Civic",
      year: "2019-2021",
      engine: "2.0L",
      vehicle: "Nissan Models",
      image: "/images/air-filter.webp",
    },
  ];

  const initialFilters = {
    brand: [],
    model: [],
    year: [],
    engine: [],
  };

  const [filters, setFilters] = useState(initialFilters);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return Object.entries(filters).every(([key, selected]) => {
        return selected.length === 0 || selected.includes(product[key]);
      });
    });
  }, [filters]);

  useEffect(() => {
    setVisibleCount(6);
  }, [filters]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

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
      <div className=" w-full px-20 py-30">
        <div className=" w-full flex items-center justify-between gap-10">
          <div className=" w-full h-12 px-5 flex items-center space-x-3  rounded-sm border border-blue-300 bg-blue-50">
            <FaSearch className=" text-blue-800" />
            <input
              type="text"
              className=" p-2  outline-none w-full"
              placeholder="Search by part name, brand, or vehicle..."
            />
          </div>
          <CustomDropdown
            options={conditions}
            value={condition}
            onChange={setCondition}
            placeholder="Select Condition"
          />
        </div>
        <div className=" w-full h-full flex justify-between space-x-10 mt-10">
          <div className=" w-60">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
          <div className=" w-full">
            <div className=" flex w-full justify-between">
              <p className="font-semibold text-blue-950 text-xs">
                {filteredProducts.length} products
              </p>
              <p className="text-xs text-gray-500">Illustrative catalogue</p>
            </div>
            <div className=" mt-10">
              {visibleProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {visibleProducts.map((product) => (
                    <Part_Card />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-gray-500">
                  No products found.
                </div>
              )}

              {/* Load More */}
              {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="px-8 py-3 bg-blue-950 text-white rounded-md hover:bg-blue-800 transition"
                  >
                    Load More Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts_Page;
