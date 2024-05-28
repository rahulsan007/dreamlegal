import ProductCompareCard from "@/components/ProductCompareCard";
import SliderElement from "@/components/Silder";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";

function page() {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-clarity">
      <div className=" flex gap-2  text-gray-900  my-4 transition-all duration-200 hover:cursor-pointer hover:translate-y-[-3px] hover:text-primary1 hover:gap-3 items-center ">
        <IoReturnUpBackOutline className=" text-[22px] " />
        <span className=" text-sm font-bold">Browse all products</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" w-full md:col-span-1 md:h-fit md:sticky md:top-0">
          <div>
            <img
              src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63c82fe038b315197d0623d9_startuper-featured-image-aggregator-x-webflow-template.svg"
              alt=""
              className="rounded-3xl w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
            />
          </div>

          <div className="my-4 md:my-8">
            <div className=" hidden md:block">
              <h2 className="text-xl md:text-2xl font-bold">
                Similar products
              </h2>
              <div className="flex flex-col  gap-3 md:px-2 my-5">
                <ProductCompareCard />
                <ProductCompareCard />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2 overflow-y-scroll no-scrollbar ">
          <div className=" border shadow-md rounded-3xl px-4 md:px-16 py-10">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-xl md:text-3xl">Product Name</h1>
              <div className=" md:w-3/4">
                <p className="text-sm text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  sagittis odio accumsan aliquet est sed tristique ipsum et
                  ornare mauris.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className=" inline-flex gap-3 flex-wrap">
                  <div className="py-1 px-2.5 border border-slate-300 bg-slate-50 transition-all duration-200 hover:cursor-pointer text-slate-500 rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                    Business
                  </div>

                  <div className="py-1 px-2.5 border border-slate-300 bg-slate-50 transition-all duration-200 hover:cursor-pointer text-slate-500 rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                    Productivity
                  </div>

                  <div className="py-1 px-2.5 border border-slate-300 bg-slate-50 transition-all duration-200 hover:cursor-pointer text-slate-500 rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                    Communication
                  </div>

                  <div className="py-1 px-2.5 border border-slate-300 bg-slate-50 transition-all duration-200 hover:cursor-pointer text-slate-500 rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                    Management
                  </div>
                </div>
                <button className="  flex gap-2 rounded-full bg-black  text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-primary1 hover:gap-4">
                  Visit
                  <IoIosArrowRoundForward className=" text-xl" />
                </button>
              </div>

              <div className="w-full h-px bg-slate-200 my-4"></div>
              <div>
                <SliderElement>
                  <img
                    src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63cabfaa40bbd89b13ba409e_product-gallery-one-aggregator-x-webflow-template-p-500.png"
                    className=" w-full rounded-3xl"
                    alt=""
                  />

                  <img
                    src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63cabfaa40bbd89b13ba409e_product-gallery-one-aggregator-x-webflow-template-p-500.png"
                    className=" w-full rounded-3xl"
                    alt=""
                  />

                  <img
                    src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63cabfaa40bbd89b13ba409e_product-gallery-one-aggregator-x-webflow-template-p-500.png"
                    className=" w-full rounded-3xl"
                    alt=""
                  />

                  <img
                    src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63cabfaa40bbd89b13ba409e_product-gallery-one-aggregator-x-webflow-template-p-500.png"
                    className=" w-full rounded-3xl"
                    alt=""
                  />

                  <img
                    src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63cabfaa40bbd89b13ba409e_product-gallery-one-aggregator-x-webflow-template-p-500.png"
                    className=" w-full rounded-3xl"
                    alt=""
                  />

                  <img
                    src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63cabfaa40bbd89b13ba409e_product-gallery-one-aggregator-x-webflow-template-p-500.png"
                    className=" w-full rounded-3xl"
                    alt=""
                  />
                </SliderElement>

                <div className=" my-8 flex flex-col">
                  <h2 className="text-2xl font-bold">About the product</h2>
                  <p className="text-sm text-slate-500 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lobortis arcu enim urna adipiscing praesent velit viverra
                    sit semper lorem eu cursus vel hendrerit elementum morbi
                    curabitur etiam nibh justo, lorem aliquet donec sed sit mi
                    dignissim at ante massa mattis.
                    <br /> <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lobortis arcu enim urna adipiscing praesent velit viverra
                    sit semper lorem eu cursus vel hendrerit elementum morbi
                    curabitur etiam nibh justo, lorem aliquet donec sed sit mi
                    dignissim at ante massa mattis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" block md:hidden">
            <h2 className="text-xl md:text-2xl font-bold my-4">
              Similar products
            </h2>
            <div className="flex flex-col  gap-3 md:px-2 my-5">
              <ProductCompareCard />
              <ProductCompareCard />
              <ProductCompareCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
