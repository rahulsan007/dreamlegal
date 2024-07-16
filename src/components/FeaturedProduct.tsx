import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";

function FeaturedProduct({ id, image, title, description, category, userCategory, product }: any) {
  const userCategories = [
    {
      name: "Law firms",
      icon: "/lawfirmicon.svg"
    },
    {
      name: "Individual Practitioner",
      icon: "/prac.svg"
    },
    {
      name: "Government departments",
      icon: "/govdepticon.svg"
    },
    {
      name: "Startups",
      icon: "/startupicon.svg"
    },
    {
      name: "Enterprises",
      icon: "/enterpriceicon.svg"
    },
    {
      name: "Judiciary",
      icon: "/judge1.svg"
    }
  ];

  const userCategoryIcons = product.userCategory.map((userCat:any) => {
    const categoryObj = userCategories.find((cat) => cat.name === userCat);
    return categoryObj ? categoryObj : null;
  }).filter(Boolean); // Filter out null values
  return (
    <div className="w-full px-10 py-7 rounded-xl border  font-clarity bg-gray-50 border-gray-300 shadow-md ">
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex gap-4 items-center">
        <img
          src={image}
          className="w-14 h-14 rounded-full shadow-blue-50 shadow-sm"
          alt=""
        />
        <div className="flex flex-col gap-1 ml-1">
          <div>
            <h3 className="flex gap-2 items-center font-bold text-base">{title} <span className="text-white p-2 rounded-full bg-primary1"><TiStarFullOutline /></span> </h3>
          </div>
          <div className="px-2 py-1 bg-primary2 rounded-full">
            {" "}
            <span className="text-xs text-primary1 font-bold">
              {category}
            </span>
          </div>
        </div>
      </div>
      
      <div className=" hidden md:block md:ml-auto">
        <div className="md:ml-auto mt-4 md:mt-0 flex gap-4 items-center">
          <div>
            <Link
              href={`/product/${id}`}
              className="flex gap-2 items-center bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all w-fit  hover:bg-primary2 hover:text-primary1 hover:border-primary1 rounded-full hover:gap-4"
            >
              View
              <IoIosArrowRoundForward className="text-xl" />
            </Link>
          </div>

          <div className="flex gap-2 text-slate-800 text-lg items-center ">
            {" "}
            <FaBookmark />{" "}
          </div>
          <div className="flex gap-2 text-slate-800 text-lg items-center">
            {" "}
            <FiShare2 />{" "}
          </div>
        </div>
        </div>
      <div></div>
    </div>
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-xs text-slate-400 mt-4 mb-1">Overview</div>
        <div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div>
        <div className="flex text-xs text-slate-400 mt-4 mb-1">
          Industries
        </div>
        <div className="flex gap-2">
          {product.industry.map((industry: any, index: number) => (
            <div key={industry}>
              <p className="text-sm text-primary1">
                {industry}
                {index !== product.industry.length - 1 ? "," : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div>
      <div className="text-xs text-slate-400 mt-4 mb-1">User Category</div>
       <div className="flex gap-2">
        {userCategoryIcons.map((userCategory:any, index:number) => (
          <div key={userCategory.name} className="relative group flex gap-2 items-center bg-primary2 rounded-md p-2">
            <img
              src={userCategory.icon}
              alt={userCategory.name}
              className="w-6 h-6"
            />
            <div className="hidden group-hover:block text-[10px] font-clarity font-bold transition-all duration-200 cursor-pointer">
              {userCategory.name}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className=" block md:hidden">
        <div className="md:ml-auto mt-4 md:mt-0 flex gap-4 items-center">
          <div>
            <Link
              href={`/product/${id}`}
              className="flex gap-2 items-center bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all w-fit  hover:bg-primary2 hover:text-primary1 hover:border-primary1 rounded-full hover:gap-4"
            >
              View
              <IoIosArrowRoundForward className="text-xl" />
            </Link>
          </div>

          <div className="flex gap-2 text-slate-800 text-lg items-center ">
            {" "}
            <FaBookmark />{" "}
          </div>
          <div className="flex gap-2 text-slate-800 text-lg items-center">
            {" "}
            <FiShare2 />{" "}
          </div>
        </div>
        </div>
  </div>
  );
}

export default FeaturedProduct;
