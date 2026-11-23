import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const filterGroups = [
  {
    title: "Vehicle Make",
    key: "brand",
    options: ["Toyota", "Honda", "Nissan", "Suzuki", "BMW"],
  },
  {
    title: "Vehicle Model",
    key: "model",
    options: ["Axio", "Allion", "Premio", "Vezel", "Civic"],
  },
  {
    title: "Model Year",
    key: "year",
    options: ["2015-2018", "2019-2021", "2022-2025"],
  },
  {
    title: "Engine / Variant",
    key: "engine",
    options: ["1.0L", "1.3L", "1.5L", "1.8L", "2.0L"],
  },
];

const FilterSidebar = ({ filters, setFilters }) => {
  const [expanded, setExpanded] = useState(["Vehicle Make"]);

  const toggleSection = (title) => {
    setExpanded((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <aside className="w-full border border-gray-200 bg-white">

      <h2 className="text-lg font-bold text-blue-950 p-5 border-b">
        Filter Parts
      </h2>

      {filterGroups.map((group) => (
        <div key={group.key} className="border-b border-gray-200">

          <button
            onClick={() => toggleSection(group.title)}
            className="w-full flex justify-between items-center px-5 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            {group.title}

            {expanded.includes(group.title)
              ? <FaMinus size={11} />
              : <FaPlus size={11} />
            }
          </button>

          {expanded.includes(group.title) && (
            <div className="px-5 pb-4 space-y-3">

              {group.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 text-sm text-gray-500 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters[group.key].includes(option)}
                    onChange={() => handleFilter(group.key, option)}
                    className="w-4 h-4 accent-blue-700 cursor-pointer"
                  />

                  {option}
                </label>
              ))}

            </div>
          )}

        </div>
      ))}

    </aside>
  );
};

export default FilterSidebar;