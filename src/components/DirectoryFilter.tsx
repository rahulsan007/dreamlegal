"use client";
import { ChangeEvent, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { ScrollArea } from "./ui/scroll-area";

// Assuming you have this file for styles

function DirectoryFilter({ selectedFilters, handleFilterChange }:any) {
  const [openCategory, setOpenCategory] = useState({
    category: false,
    customer: false,
    country: false,
    pricing: false,
    deployment: false,
    mobile: false,
    lang: false,
    industry: false,
    practice: false,
  });

  const toggleOpenCategory = (category: string) => {
    setOpenCategory((prevState) => {
      const categoryKey = category as keyof typeof prevState;
      return {
        ...prevState,
        [categoryKey]: !prevState[categoryKey],
      };
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, filterType: string, value: string) => {
    handleFilterChange(filterType, value);
  };

  return (
    <ScrollArea className="h-screen pb-10 w-full">
      <div className="space-y-2 font-clarity">
        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("category")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className="w-5 h-5" />
                <span className="text-sm font-medium"> Categories </span>
              </div>
            </div>
            <span className={`transition-all ml-auto ${openCategory.category ? "rotate-90" : ""}`}>
              <IoArrowForward />
            </span>
          </div>
          <div className={`transition-height duration-300 ease-in-out ${openCategory.category ? "max-h-screen" : "max-h-0"}`}>
            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label htmlFor="Document Management and Automation" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Document Management and Automation"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Document Management and Automation")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Document Management and Automation")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Document Management and Automation </span>
                </label>
              </li>
              <li>
                <label htmlFor="Customer Support" className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Customer Support"
                    className="size-5 rounded border-gray-300"
                    checked={selectedFilters.categories.includes("Customer Support")}
                    onChange={(e) => handleCheckboxChange(e, "categories", "Customer Support")}
                  />
                  <span className="text-sm font-medium text-gray-700"> Customer Support </span>
                </label>
              </li>
              {/* Add more categories here */}
            </ul>
          </div>
        </div>
        {/* Add more filter categories here */}
        <button className="flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all w-fit items-center hover:bg-gray-900 hover:gap-4 duration-200 my-3">
          Apply
        </button>
      </div>
    </ScrollArea>
  );
}

export default DirectoryFilter;
