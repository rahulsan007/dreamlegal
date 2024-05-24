"use client";
import React from "react";
import Search from "./animated-ui/Search";
import FilterCategory from "./animated-ui/FilterCategory";

const placeholders = [
  "Lawyer CRM",
  "Document Management System",
  "Invoice Generator",
  "Assessment Platform",
];

function HomeHero() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 font-clarity">
      <div className="hidden md:block">
        {" "}
        <div className=" rounded-md relative">
          <img src="/background.png" alt="" />
          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col items-center justify-center h-full">
              <div className=" grid grid-cols-10">
                <div className="col-span-3"></div>
                <div className="col-span-4 flex flex-col  gap-4">
                  <h2 className="text-4xl font-bold text-center">
                    Discover the next SaaS product today.
                  </h2>
                  <p className=" text-sm text-[#46526a] text-center ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit etiam
                    nisl tellus dolor egestas quis laoreet fames odio habitasse
                    orci.
                  </p>
                  <div className=" inline-flex items-center  justify-between w-full">
                    <div className="flex-initial w-[65%]">
                      <Search
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                      />
                    </div>
                    <div className="flex-initial w-[20%]">
                      <FilterCategory />
                    </div>
                  </div>
                </div>
                <div className="col-span-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className=" rounded-md relative w-full">
          <img src="/background2.png" className="w-full" alt="" />
          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col items-center justify-center h-full px-4">
              <h2 className="text-3xl font-bold text-center">
                Discover the next SaaS product today.
              </h2>
              <p className=" text-sm text-[#46526a] text-center my-2 ">
                Lorem ipsum dolor sit amet consectetur adipiscing elit etiam
                nisl tellus dolor egestas quis laoreet fames odio habitasse
                orci.
              </p>
              <div className="flex flex-col items-center  justify-center gap-3 w-full mt-3">
                <div className="flex-initial w-full">
                  <Search
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                  />
                </div>
                <div className="flex-initial w-full">
                  <FilterCategory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
