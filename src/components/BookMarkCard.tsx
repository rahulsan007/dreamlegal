import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function BookMarkCard() {
  return (
    <div className="w-full px-10 py-7 bg-secondary1 rounded-xl border shadow-md">
      <div className="grid grid-cols-1 ">
        <div className="md:col-span-2 inline-flex flex-col  gap-4">
          <Image
            src={`https://assets-global.website-files.com/63bed0273cfe5e611e742359/63c82fd5f0b9d119f5e3d6c0_webtech-featured-image-aggregator-x-webflow-template.svg`}
            width={80}
            height={80}
            alt="logo"
            className="rounded-full w-20 h-20 object-cover"
          ></Image>
          <div>
            <h3 className=" font-bold text-base">Webtech</h3>
            <p className=" text-sm text-slate-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <div className=" flex gap-3 items-center mt-3 ">
              <div>
                <p className=" bg-primary2 px-2 py-2 text-xs rounded-full text-primary1 font-bold">
                  {" "}
                  Development
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-2">
          <div className="flex flex-col md:flex-row  gap-4 md:items-center justify-center h-full ">
            <Link href={"/"}>
              <span className=" text-sm hover:text-primary1">Learn more</span>
            </Link>
            <button className=" flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-gray-900 hover:gap-4">
              Contact us
              <IoIosArrowRoundForward className=" text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookMarkCard;
