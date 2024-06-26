"use client";
import React, { useEffect, useState } from "react";
import NormalProduct from "./NormalProduct";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import Search from "./animated-ui/Search";
import DirectoryFilter from "./DirectoryFilter";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

const placeholders = [
  "Lawyer CRM",
  "Document Management System",
  "Invoice Generator",
  "Assessment Platform",
];

function DirectoryProduct() {
  const [featureProduct, setFeatureProduct] = useState([]);
  const [latestProduct, setLatestProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/get-all-products");
        const data = await response.json();

        if (data.success) {
          const products = data.products;
          const featured = products.filter(
            (product: { featured: any }) => product.featured
          );
          const latest = products.filter(
            (product: { featured: any }) => !product.featured
          );

          if (featured.length === 0 && latest.length > 0) {
            featured.push(latest[0]);
          }

          setFeatureProduct(featured);
          setLatestProduct(latest);
        }
      } catch (error) {
        console.error("An error occurred while fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-clarity">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" h-fit w-full md:w-[300px] md:col-span-1 sticky top-0 hidden md:block">
          <h2 className=" text-lg font-bold text-gray-900 mb-4">
            Filter By Category
          </h2>
          <DirectoryFilter />
          <div className=" my-4 ">
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
        <div className=" col-span-2 overflow-y-scroll no-scrollbar">
          <div className=" w-full flex flex-col md:flex-row items-center justify-between  ">
            <h2 className=" text-xl font-bold mb-5 md:mb-0">
              Directory search
            </h2>
            <div className=" flex gap-2 ">
              {" "}
              <Search
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
              <div className="block md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="flex gap-2 rounded-full bg-white text-gray-900 border border-gray-700 font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-primary1 hover:text-white hover:border-white">
                      <Image
                        src={"/filtericon.svg"}
                        width={20}
                        height={20}
                        alt="icon"
                      ></Image>
                      <span className="text-sm mr-2">Filter</span>
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <DirectoryFilter />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 mt-4 mb-4">
            {latestProduct.map((product: any) => (
              <NormalProduct
                key={product.id}
                image={product.logourl}
                title={product.name}
                description={product.description}
                category={product.category}
              />
            ))}
          </div>

          <div className=" w-full flex items-center justify-center mt-10 ">
            <button className=" flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-gray-900 hover:gap-4 duration-200">
              Next
              <IoIosArrowRoundForward className=" text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectoryProduct;
