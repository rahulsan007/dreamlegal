"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const categories = [
  {
    name: "Law firm",
    href: "#",
    img: "/lawfirmicon.svg",
    description: "Lorem, saepe officia tempore officiis et.",
  },
  {
    name: "Enterprise",
    href: "#",
    img: "/enterpriceicon.svg",
    description: "Lorem, saepe officia tempore officiis et.",
  },
  {
    name: "Startup",
    href: "#",
    img: "/startupicon.svg",
    description: "Lorem, saepe officia tempore officiis et.",
  },
  {
    name: "Government  Department",
    href: "#",
    img: "/govdepticon.svg",
    description: "Lorem, saepe officia tempore officiis et.",
  },
  {
    name: "Other",
    href: "#",
    img: "/inhouselegalicon.svg",
    description: "Lorem, saepe officia tempore officiis et.",
  },
];

function FilterCategory() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex rounded-full gap-3 px-6 bg-white hover:bg-white hover:border-primary1">
              <Image
                src={"/filtericon.svg"}
                width={20}
                height={20}
                alt="icon"
              ></Image>
              <span>Filter by category</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 px-2 md:p-6 bg-white w-full md:w-[400px] rounded-lg shadow-md ">
                {categories.map((category, idx) => (
                  <li key={idx}>
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-[#e1e7ffc3] px-3 py-4 rounded-lg">
                      <Image
                        src={category.img}
                        width={28}
                        height={28}
                        alt="icon"
                      />
                      <div className=" inline-flex justify-between w-full items-center">
                        <div className="inline-block">
                          <div className="font-bold text-xs text-[#0c1830]">
                            {category.name}
                          </div>
                          <div className="text-[#575c66] text-xs font-medium">
                            {category.description}
                          </div>
                        </div>
                        <MdArrowForward className="text-[#0c1830] text-lg" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default FilterCategory;
