import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

const userCategories = [
  {
    name:"Law firms",
    icon:"/lawfirmicon.svg"
  },
  {
    name:"Government departments",
    icons:"/govdepticon.svg"
  },
  {
    name:"Individual Practitioner",
    icon:"/prac.svg"
  },
  
  {
    name:"Startups",
    icons: "/startupicon.svg"
  },
 { 
  name:"Enterprises",
  icons: "/enterpriceicon.svg"
 },
  {
    name:"Judiciary",
    icons: "/judge1.svg"
  },
  
];

function NormalProduct({
  id,
  image,
  title,
  description,
  category,
  product,
}: any) {

  const userCategoryIcons = product.userCategory.map((userCat:any) => {
    const categoryObj = userCategories.find((cat) => cat.name === userCat);
    return categoryObj ? categoryObj : null;
  }).filter(Boolean); // Filter out null values



  return (
    <div className="w-full px-10 py-7 bg-secondary1 rounded-xl border shadow-md">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img
            src={image}
            className="w-14 h-14 rounded-full shadow-blue-50 shadow-sm"
            alt=""
          />
          <div className="flex flex-col gap-1 ml-1">
            <div>
              <h3 className="font-bold text-base">{title}</h3>
            </div>
            <div className="px-2 py-1 bg-primary2 rounded-full">
              {" "}
              <span className="text-xs text-primary1 font-bold">
                {category}
              </span>
            </div>
          </div>
        </div>
        <div className="ml-auto flex gap-4 items-center">
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
        <div></div>
      </div>
      <div className="w-full flex items-center justify-between">
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
            <div key={userCategory.name} className="relative group">
              <img
                src={userCategory.icon}
                alt={userCategory.name}
                className="w-10 h-10"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {userCategory.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NormalProduct;
