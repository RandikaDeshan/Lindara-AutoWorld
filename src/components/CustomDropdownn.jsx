
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa";

const CustomDropdown = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  return (
    <div ref={dropdownRef} className="relative w-60">

      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 px-3 flex items-center justify-between
        border border-blue-300 bg-blue-50 rounded-md
        text-blue-700 text-sm hover:border-blue-500
        focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        <span>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <FaChevronDown
          className={`text-xs transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2
        p-1 bg-blue-50 border border-blue-300 rounded-sm
        shadow-lg z-50">

          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2.5 rounded-sm
              flex items-center justify-between text-sm
              transition-colors duration-150 cursor-pointer
              ${
                value === option.value
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {option.label}

              {value === option.value && (
                <FaCheck className="text-blue-600 text-xs" />
              )}
            </button>
          ))}

        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
