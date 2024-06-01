import ProductCompareCard from "@/components/ProductCompareCard";
import ProductInfoTab from "@/components/ProductInfoTab";
import ProductSidebar from "@/components/ProductSidebar";
import SliderElement from "@/components/Silder";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TbPointFilled } from "react-icons/tb";
import ProcessLifecycle from "@/components/ProcessLifecycle";
import ProductFeature from "@/components/ProductFeature";
import ProductPricingTable from "@/components/ProductPricingTable";
import ProductService from "@/components/ProductService";
import ProductReference from "@/components/ProductReference";
import ProductReview from "@/components/ProductReview";
import ProductMobileSidebar from "@/components/ProductMobileSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function page() {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-clarity">
      <div className=" flex gap-2  text-gray-900  my-4 transition-all duration-200 hover:cursor-pointer hover:translate-y-[-3px] hover:text-primary1 hover:gap-3 items-center ">
        <IoReturnUpBackOutline className=" text-[22px] " />
        <span className=" text-sm font-bold">Browse all products</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" w-full md:col-span-1 md:h-fit md:sticky md:top-0 ">
          <ProductSidebar />
        </div>

        <div className=" col-span-2 overflow-y-scroll no-scrollbar ">
          <div className="block md:hidden">
            <div className="fixed right-0 top-1/2  z-50 ">
              <Sheet>
                <SheetTrigger asChild>
                  <button className=" bg-black text-white py-4 px-4 rounded-full text-xs">
                    <HiDotsVertical />
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <ProductMobileSidebar />
                </SheetContent>
              </Sheet>
            </div>
          </div>
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

              <div className="flex flex-col md:flex-row justify-between">
                <div className=" flex flex-col gap-3">
                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Company Name
                    </p>
                    <p className="text-sm text-slate-500">
                      Manupatra Technologies Pvt. Ltd.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Founded Date
                    </p>
                    <p className="text-sm text-slate-500">2022</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Operation Status
                    </p>
                    <p className="text-sm text-slate-500">Active</p>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Headquaters
                    </p>
                    <p className="text-sm text-slate-500">New Delhi, India</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-bold">Founders</p>
                    <p className="text-sm text-slate-500">
                      Elina Berglund, Raoul Scherwitzl
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Company Type{" "}
                    </p>
                    <p className="text-sm text-slate-500">for profit</p>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div>
                    <p className="text-sm text-gray-900 font-bold">Email</p>
                    <p className="text-sm text-slate-500">
                      contact@manupatra.com
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-bold">Phone</p>
                    <p className="text-sm text-slate-500">1234567890</p>
                  </div>
                </div>
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

              <ProductInfoTab />

              <div className="w-full h-px bg-slate-200 my-4"></div>
              {/* Overview */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex  gap-2 items-center">
                    <h2 className=" text-lg font-bold text-gray-900">USP</h2>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdOutlineInfo className="text-slate-500 text-sm" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Unique selling points</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div>
                    <ul className=" flex flex-col gap-4 py-3">
                      <li className=" flex gap-3 items-center">
                        <TbPointFilled className="text-primary1" />
                        <p className=" text-gray-900">Unique selling points</p>
                      </li>

                      <li className=" flex gap-3 items-center">
                        <TbPointFilled className="text-primary1" />
                        <p className=" text-gray-900">Unique selling points</p>
                      </li>
                      <li className=" flex gap-3 items-center">
                        <TbPointFilled className="text-primary1" />
                        <p className=" text-gray-900">Unique selling points</p>
                      </li>
                      <li className=" flex gap-3 items-center">
                        <TbPointFilled className="text-primary1" />
                        <p className=" text-gray-900">Unique selling points</p>
                      </li>
                      <li className=" flex gap-3 items-center">
                        <TbPointFilled className="text-primary1" />
                        <p className=" text-gray-900">Unique selling points</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className=" flex flex-col gap-4 ">
                  <div className="bg-primary2/40 px-5 py-3 rounded-2xl">
                    <div className="flex  gap-2 items-center">
                      <h2 className=" text-lg font-bold text-gray-900">
                        Overview
                      </h2>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <MdOutlineInfo className="text-slate-500 text-sm" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Overview of company,products in short</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className=" text-sm text-slate-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae debitis sapiente provident! Beatae animi
                      repellendus perferendis sit nam, sapiente tempore illum
                      omnis, assumenda, dolorum iusto nobis porro quod a
                      impedit?
                    </p>
                  </div>

                  <div className="bg-primary2/40 px-5 py-3 rounded-2xl">
                    <div className="flex  gap-2 items-center">
                      <h2 className=" text-lg font-bold text-gray-900">
                        Founder Vision
                      </h2>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <MdOutlineInfo className="text-slate-500 text-sm" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Founder vision of company,growth</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className=" text-sm text-slate-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae debitis sapiente provident! Beatae animi
                      repellendus perferendis sit nam, sapiente tempore illum
                      omnis, assumenda, dolorum iusto nobis porro quod a
                      impedit?
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 my-4"></div>

              {/* Segments */}

              <div className="flex flex-col md:flex-row flex-wrap justify-between ">
                <div>
                  <div className="flex  gap-2 items-center">
                    <h2 className=" text-lg font-bold text-gray-900">
                      Customer segments
                    </h2>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdOutlineInfo className="text-slate-500 text-sm" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Overview of company,products in short</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" inline-flex gap-3 flex-wrap">
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Law firms
                      </div>
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Enterprises
                      </div>
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Startups
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex  gap-2 items-center">
                    <h2 className=" text-lg font-bold text-gray-900">
                      Indusries
                    </h2>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdOutlineInfo className="text-slate-500 text-sm" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Overview of company,products in short</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" inline-flex gap-3 flex-wrap">
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Law firms
                      </div>
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Enterprises
                      </div>
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Startups
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" md:mt-4">
                  <div className="flex  gap-2 items-center">
                    <h2 className=" text-lg font-bold text-gray-900">
                      Practice Area
                    </h2>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <MdOutlineInfo className="text-slate-500 text-sm" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Overview of company,products in short</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className=" inline-flex gap-3 flex-wrap">
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Law firms
                      </div>
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Enterprises
                      </div>
                      <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                        Startups
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 my-4"></div>

              <div className="flex  gap-2 items-center">
                <h2 className=" text-lg font-bold text-gray-900">
                  Process Lifecycle
                </h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo className="text-slate-500 text-sm" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Lifecycle of process</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <ProcessLifecycle />

              <div className="w-full h-px bg-slate-200 my-4"></div>
              {/* Features */}

              <div className="flex  gap-2 items-center">
                <h2 className=" text-lg font-bold text-gray-900">Features</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo className="text-slate-500 text-sm" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Lifecycle of process</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <ProductFeature />

              <div className="w-full h-px bg-slate-200 my-4"></div>

              <div className="flex  gap-2 items-center">
                <h2 className=" text-lg font-bold text-gray-900">Pricing</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo className="text-slate-500 text-sm" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Lifecycle of process</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className=" flex flex-col md:flex-row justify-between">
                <div>
                  <p className="text-sm text-gray-900 font-bold">Type</p>
                  <p className="text-sm text-slate-500">Free Trial.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-900 font-bold">Time period</p>
                  <p className="text-sm text-slate-500">3 months.</p>
                </div>

                <div>
                  <p className="text-sm text-gray-900 font-bold">
                    Pricing type
                  </p>
                  <p className="text-sm text-slate-500">Custom.</p>
                </div>
              </div>

              <div>
                <div className="flex  gap-2 items-center">
                  <h2 className="  font-bold text-gray-900">
                    Pricing parameter
                  </h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <MdOutlineInfo className="text-slate-500 text-sm" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Overview of company,products in short</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex justify-between items-center">
                  <div className=" inline-flex gap-3 flex-wrap">
                    <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                      Number of documents
                    </div>
                    <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                      Urgency
                    </div>
                    <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                      Document type
                    </div>

                    <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                      Customer Support
                    </div>

                    <div className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1">
                      Number of pages
                    </div>
                  </div>
                </div>
              </div>

              <ProductPricingTable />

              <div className="w-full h-px bg-slate-200 my-4"></div>
              {/* Support */}
              <div className="flex  gap-2 items-center">
                <h2 className=" text-lg font-bold text-gray-900">
                  Support & Services
                </h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo className="text-slate-500 text-sm" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Lifecycle of process</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <ProductService />

              <div className="w-full h-px bg-slate-200 my-4"></div>

              <div className="flex  gap-2 items-center">
                <h2 className=" text-lg font-bold text-gray-900">Reference</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo className="text-slate-500 text-sm" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Lifecycle of process</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <ProductReference embedId="rokGy0huYEA" />

              <div className="w-full h-px bg-slate-200 my-4"></div>

              <div className="flex  gap-2 items-center">
                <h2 className=" text-lg font-bold text-gray-900">Reviews</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MdOutlineInfo className="text-slate-500 text-sm" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Lifecycle of process</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              {/* Reviews */}
              <ProductReview />
            </div>
          </div>

          <div className=" block ">
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
