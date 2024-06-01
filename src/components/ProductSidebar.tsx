"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdGridView } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";

function ProductSidebar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-clarity md:w-[300px]">
      <div>
        <img
          src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63c82fe038b315197d0623d9_startuper-featured-image-aggregator-x-webflow-template.svg"
          alt=""
          className={`rounded-3xl w-[150px] h-[150px] md:w-[300px] md:h-[300px] md:sticky md:top-0 ${
            isSticky ? "sticky-img sticky" : "sticky-img"
          }`}
        />
      </div>

      <div className="my-4 md:my-8 hidden md:block">
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
    </div>
  );
}

export default ProductSidebar;
