import React from "react";

const Steps_Section = () => {
  const steps = [
    {
      id: "01",
      title: "Find Your Part",
      des: "Search the catalogue or choose your vehicle details.",
    },
    {
      id: "02",
      title: "Message Our Team",
      des: "Send the product directly through WhatsApp.",
    },
    {
      id: "03",
      title: "Confirm Your Order",
      des: "We confirm availability, final price and delivery.",
    },
  ];

  return (
    <div className=" w-full h-full px-20 pt-30 pb-20 flex flex-col items-center">
      <p className=" text-blue-600 uppercase mb-8 text-sm font-semibold tracking-widest">
        SIMPLE & DIRECT
      </p>
      <p className=" text-4xl font-semibold ">
        From Search to Order in 3 Steps
      </p>
      <div className=" relative w-full mt-20">
        <div className="absolute z-0 top-7 left-[calc(16.666%-28px)] right-[calc(16.666%-28px)] border-t border-dashed border-blue-300"></div>
        <div className=" relative z-10 flex justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" flex flex-col items-center text-center w-1/3 px-2"
            >
              <div className=" flex flex-col items-center">
                <div className=" w-14 h-14 rounded-full bg-blue-200 flex items-center justify-center relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14213D] text-white text-sm font-semibold">
                    {step.id}
                  </div>
                </div>
                <p className=" mt-10 font-semibold text-blue-800">
                  {step.title}
                </p>
                <p className=" text-xs text-blue-500">{step.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps_Section;
