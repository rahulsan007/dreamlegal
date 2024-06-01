import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUser, FaRegStar } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import {
  MdOutlineBusinessCenter,
  MdGridView,
  MdOutlineFeaturedPlayList,
  MdOutlineContactSupport,
} from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";

function ProductMobileSidebar() {
  return (
    <div className="my-4 md:my-8 ">
      <ul className="flex flex-col gap-4 px-2 py-6 rounded-2xl border">
        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <AiOutlineProduct className="text-xl" />
          <span>Product Information</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <MdOutlineBusinessCenter className="text-xl" />
          <span>Company Information</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <MdGridView className="text-xl" />
          <span>Overview</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <FaRegUser className="text-xl" />
          <span>Customers</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <GrCycle className="text-xl" />
          <span>Process Licecycle</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <MdOutlineFeaturedPlayList className="text-xl" />
          <span>Features</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <RiMoneyRupeeCircleLine className="text-xl" />
          <span>Pricing</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <MdOutlineContactSupport className="text-xl" />
          <span>Support</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <VscReferences className="text-xl" />
          <span>Reference</span>
        </li>

        <li className="flex items-center gap-2 text-primary1 hover:bg-primary2/70 hover:cursor-pointer px-4     transition-all duration-200 rounded-full">
          <FaRegStar className="text-xl" />
          <span>Reviews</span>
        </li>
      </ul>
    </div>
  );
}

export default ProductMobileSidebar;
