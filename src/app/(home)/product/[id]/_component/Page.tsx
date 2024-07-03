"use client";
import ProductCompareCard from "@/components/ProductCompareCard";
import ProductInfoTab from "@/components/ProductInfoTab";
import ProductSidebar from "@/components/ProductSidebar";
import SliderElement from "@/components/Silder";
import React, { useEffect, useState } from "react";

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
import Link from "next/link";

function PageComponent({ data }: any) {
  const [product, setProduct] = useState(data.product);
  const [company, setCompany] = useState(data.company);
  const [error, setError] = useState(null);
  const usps = product.usp ? product.usp.split(",") : [];

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log(product);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-clarity">
      <Link href={`/directory`}>
        <div className=" flex gap-2  text-gray-900  my-4 transition-all duration-200 hover:cursor-pointer hover:translate-y-[-3px] hover:text-primary1 hover:gap-3 items-center ">
          <IoReturnUpBackOutline className=" text-[22px] " />
          <span className=" text-sm font-bold">Browse all products</span>
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" w-full md:col-span-1 md:h-fit md:sticky md:top-0 ">
          <ProductSidebar product={product} />
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
              <h1 className="font-bold text-xl md:text-3xl">{product.name}</h1>
              <div className=" md:w-3/4">
                <p className="text-sm text-slate-500">
                  {`${product?.description.slice(0, 100)}...`}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className=" inline-flex gap-3 flex-wrap">
                  {product?.category?.map(
                    (
                      cat:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined,
                      index: React.Key | null | undefined
                    ) => (
                      <div
                        key={index}
                        className="py-1 px-2.5 border border-slate-300 bg-slate-50 transition-all duration-200 hover:cursor-pointer text-slate-500 rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1"
                      >
                        {cat}
                      </div>
                    )
                  )}
                </div>
                <button className="  flex gap-2 rounded-full bg-black  text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-primary1 hover:gap-4">
                  <Link href={company.website}>
                    {" "}
                    Visit
                    <IoIosArrowRoundForward className=" text-xl" />
                  </Link>
                </button>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className=" flex flex-col gap-3">
                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Company Name
                    </p>
                    <p className="text-sm text-slate-500">
                      {company?.companyName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Founded Date
                    </p>
                    <p className="text-sm text-slate-500">
                      {company.yearFounded}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-900 font-bold">Region</p>
                    <p className="text-sm text-slate-500">
                      {company.regionServed}
                    </p>
                  </div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Headquaters
                    </p>
                    <p className="text-sm text-slate-500">
                      {company.headQuaters}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 font-bold">Founders</p>
                    <p className="text-sm text-slate-500">
                      {company.NameOfFounders}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-900 font-bold">
                      Team size{" "}
                    </p>
                    <p className="text-sm text-slate-500">{company.TeamSize}</p>
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
                    <p className="text-sm text-slate-500">{company.contact}</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 my-4"></div>
              <div>
                <SliderElement>
                  {product?.Images?.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      className="w-full rounded-3xl"
                      alt=""
                    />
                  ))}
                </SliderElement>

                <div className=" my-8 flex flex-col">
                  <h2 className="text-2xl font-bold">About the product</h2>
                  <p className="text-sm text-slate-500 my-2">
                    {product.description}
                  </p>
                </div>
              </div>

              <ProductInfoTab product={product} />

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
                    <ul className="flex flex-col gap-4 py-3">
                      {usps.map((usp: string, index: number) => (
                        <li key={index} className="flex gap-3 items-center">
                          <TbPointFilled className="text-primary1" />
                          <p className="text-gray-900">{usp.trim()}</p>
                        </li>
                      ))}
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
                      {company.overview}
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
                      {company.founderVision}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 my-4"></div>

              {/* Segments */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      {product.userCategory.map((segment: string) => (
                        <div
                          key={segment}
                          className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1"
                        >
                          {segment}
                        </div>
                      ))}
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
                  <div className="ml-auto flex justify-between items-center">
                    <div className="inline-flex gap-3 flex-wrap">
                      {product.industry.map((segment: string) => (
                        <div
                          key={segment}
                          className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1"
                        >
                          {segment}
                        </div>
                      ))}
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
                      {product.practiceAreas.map((segment: string) => (
                        <div
                          key={segment}
                          className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1"
                        >
                          {segment}
                        </div>
                      ))}
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

              <ProcessLifecycle product={product} />

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

              <ProductFeature features={product.features} />

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
                  <p className="text-sm text-gray-900 font-bold">Free trail</p>
                  <p className="text-sm text-slate-500">{product.freeTrial}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-900 font-bold">Time period</p>
                  <p className="text-sm text-slate-500">{product.timePeriod}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-900 font-bold">
                    Free version
                  </p>
                  <p className="text-sm text-slate-500">
                    {product.freeVersion}
                  </p>
                </div>
              </div>

              {product.pricingParams.length > 0 ? (
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
                      {product.pricingParams.map((parameter: string) => (
                        <div
                          key={parameter}
                          className="py-1 px-2.5 border border-[#FBA834]/40 bg-[#FBA834]/10 transition-all duration-200 hover:cursor-pointer text-[#FBA834] rounded-full text-xs hover:bg-primary2 hover:border-primary1 hover:text-primary1"
                        >
                          {parameter}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              <ProductPricingTable
                nameofPlan={product.nameofPlan}
                validity={product.validity}
                price={product.price}
              />

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

              <ProductService product={product} />

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

              <ProductReference product={product} />

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
              <ProductReview product={product} />
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

export default PageComponent;
