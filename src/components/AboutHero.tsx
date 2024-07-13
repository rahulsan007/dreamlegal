import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function AboutHero() {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 font-clarity">
      <div className="grid grid-cols-1 md:grid-cols-7  gap-4">
        <div className=" col-span-3 flex flex-col justify-center px-10  gap-4">
          <h1 className="text-4xl md:text-[44px] font-bold">
            About DreamLegal
          </h1>
          <p className="text-sm text-slate-500 text-justify">
            We simplify selection, onboarding and management of technology for
            legal professionals and teams. Our mission is to simplify every
            legal professional’s journey with technology, making it an
            effortless part of your daily workflow. We understand the unique
            challenges that legal professionals face and we're here to ensure
            that technology enhances your practice and eases your workload.
          </p>
         <div className=" flex gap-6">
         <button className=" flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-primary2 hover:text-primary1 hover:gap-4">
            Directory
            <IoIosArrowRoundForward className=" text-xl" />
          </button>

          <button className=" flex gap-2 rounded-full bg-primary2 text-primary1 font-bold px-6 py-3 text-xs transition-all  w-fit items-center border-primary1 hover:bg-primary1 hover:text-white hover:gap-4">
            Resources
            <IoIosArrowRoundForward className=" text-xl" />
          </button>
         </div>
        </div>
        <div className=" col-span-4">
          <Image
            src={`/aboutus2.png`}
            width={1260}
            height={750}
            alt=""
            className="rounded-3xl w-full h-full"
          ></Image>
        </div>
      </div>
      {/* <div className="flex flex-wrap justify-between items-center mt-12 mb-8">
        <div>
          <span className="text-lg font-bold">Our partners</span>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center  ">
          <img
            src="/logo1.png"
            className=" h-8 md:h-16 w-auto filter grayscale mix-blend-multiply"
            alt=""
          />
          <img
            src="/logo1.png"
            className=" h-8 md:h-16 w-auto filter grayscale mix-blend-multiply"
            alt=""
          />
          <img
            src="/logo1.png"
            className=" h-8 md:h-16 w-auto filter grayscale mix-blend-multiply"
            alt=""
          />
          <img
            src="/logo1.png"
            className=" h-8 md:h-16 w-auto filter grayscale mix-blend-multiply"
            alt=""
          />
          <img
            src="/logo1.png"
            className=" h-8 md:h-16 w-auto filter grayscale mix-blend-multiply"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
}

export default AboutHero;
