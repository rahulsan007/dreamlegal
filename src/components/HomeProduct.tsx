import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import FeaturedProduct from "./FeaturedProduct";
import NormalProduct from "./NormalProduct";

function HomeProduct() {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-clarity">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" col-span-2 overflow-y-scroll no-scrollbar">
          <h2 className="text-2xl md:text-3xl font-bold">Featured products</h2>
          <div className=" flex flex-col gap-4 mt-4 mb-4">
            <FeaturedProduct />
            <FeaturedProduct />
            <FeaturedProduct />
          </div>
          <div className=" w-full flex items-center justify-between mt-10 ">
            <h2 className=" text-2xl md:text-3xl font-bold">Latest products</h2>
            <button className=" flex gap-2 rounded-full bg-white text-gray-900 border border-gray-700 font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-primary1 hover:text-white hover:border-white">
              Browse all products
            </button>
          </div>
          <div className=" flex flex-col gap-4 mt-4 mb-4">
            <NormalProduct />
            <NormalProduct />
            <NormalProduct />
            <NormalProduct />
            <NormalProduct />
          </div>

          <div className=" w-full flex items-center justify-center mt-10 ">
            <button className=" flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-gray-900 hover:gap-4 duration-200">
              View All
              <IoIosArrowRoundForward className=" text-xl" />
            </button>
          </div>
        </div>
        <div className="h-[450px] md:h-[300px] w-full md:col-span-1 sticky top-0">
          <div className=" md:px-4">
            <div className="h-[360px] md:h-[310px] bg-primary2  rounded-xl px-8 py-10 flex flex-col gap-5 ">
              <div className=" h-12 w-12 rounded-full bg-primary1 inline-flex justify-center items-center">
                <FaArrowUp className=" text-white text-[28px]" />
              </div>
              <h3 className=" font-bold text-xl ">Submit your product!</h3>
              <p className=" text-sm text-slate-500">
                Lorem ipsum dolor amet consectetur adipiscing elit ut gravida
                sit vel.
              </p>
              <button className=" flex gap-2 rounded-full transition-all duration-200 bg-gray-900 text-white font-bold px-6 py-3 text-xs w-fit items-center hover:bg-primary1 hover:gap-4">
                Submit
                <IoIosArrowRoundForward className=" text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
