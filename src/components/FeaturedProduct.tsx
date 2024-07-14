import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";

function FeaturedProduct({ id, image, title, description, category, userCategory, product }: any) {
  return (
    <div className="w-full px-10 py-7 bg-gray-50 rounded-xl border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 inline-flex flex-col md:flex-row gap-4">
          <img
            src={image}
            width={80}
            height={80}
            alt="logo"
            className="rounded-full w-20 h-20 object-cover"
          ></img>
          <div>
            <h3 className=" flex gap-3 font-bold text-base">{title}
            <span className=" bg-primary1 rounded-full px-1 py-1 inline-flex items-center gap-1">
                <TiStarFullOutline className="text-sm text-white" />
              </span>
            </h3>
            <p className=" text-sm text-slate-500 mt-2">{description}</p>
            <div className=" flex gap-3 items-center mt-3 ">
              
              <div>
                {category.map(
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
                    <div key={index}>
                      <p className="bg-primary2 px-2 py-2 text-xs rounded-full text-primary1 font-bold">
                        {cat}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className=" flex gap-3 items-center mt-3 ">
              
            <div className="flex gap-2">
                {userCategory.slice(0, 2).map(
                  (
                    cat:any,
                    index:any
                  ) => (
                    <div key={index}>
                      <p className="bg-[#c7f9cc]/50 px-2 py-2 text-xs rounded-full text-[#38a3a5] font-bold">
                        {cat}
                      </p>
                    </div>
                  )
                )}
                {userCategory.length > 2 && (
                  <div>
                   <Link href={`/product/${id}`}>
                   <p className="bg-[#c7f9cc]/50 px-2 py-2 text-xs rounded-full text-[#38a3a5] font-bold">
                      +
                    </p></Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-2">
          <div className="flex  h-full items-center ">
            
            <Link href={`/product/${id}`} className="ml-auto ">
            <button className=" ml-auto flex gap-2 rounded-full  bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  items-center hover:bg-primary2 hover:text-primary1 hover:gap-4">
              View
              <IoIosArrowRoundForward className=" text-xl" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
