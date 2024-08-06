"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import FeaturedProduct from "./FeaturedProduct";
import NormalProduct from "./NormalProduct";
import Link from "next/link";

function HomeProduct({ data }: any) {
  const [featureProduct, setFeatureProduct] = useState([]);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (data) {
        const products = data.products.filter((product: { active: string }) => product.active === "publish");
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
    };

    fetchProducts();
  }, [data]);

  const category = [
    {
      name: "Client Management Software",
      link: "/directory?category=Client%20Management%20Software"
    },
    {
      name: "Contract Management Software",
      link: "/directory?category=Contract%20Management%20Software"
    },
    {
      name: "Digital Signature",
      link: "/directory?category=Digital%20Signature"
    },
    {
      name: "Document Management and Automation",
      link: "/directory?category=Document%20Management%20and%20Automation"
    },
    {
      name: "E-billing and Invoicing",
      link: "/directory?category=E-billing%20and%20Invoicing"
    },
    {
      name: "E-discovery",
      link: "/directory?category=E-discovery"
    },
    {
      name: "Governance and Compliance and Risk Management",
      link: "/directory?category=Governance%20and%20Compliance%20and%20Risk%20Management"
    },
    {
      name: "Intellectual Property Management",
      link: "/directory?category=Intellectual%20Property%20Management"
    },
    {
      name: "Legal Research",
      link: "/directory?category=Legal%20Research"
    },
    {
      name: "Legal Workflow Automation",
      link: "/directory?category=Legal%20Workflow%20Automation"
    },
    {
      name: "Litigation Management and Analytics",
      link: "/directory?category=Litigation%20Management%20and%20Analytics"
    }
  ];

  
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-clarity">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" col-span-2 overflow-y-scroll no-scrollbar">
        <div className=" w-full flex items-center justify-between mt-10 ">
            <h2 className=" text-2xl md:text-3xl font-bold">Featured products</h2>
            <Link href={"/directory"}>
            <button className=" flex gap-2 rounded-full bg-white text-gray-900 border border-gray-700 font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-primary1 hover:text-white hover:border-white">
              Browse all products
            </button>
            </Link>
          </div>
          <div className=" flex flex-col gap-4 mt-4 mb-4">
            {featureProduct.slice(0, 4).map((product: any) => (
              <FeaturedProduct
                key={product.id}
                id={product.id}
                image={product.logoUrl}
                title={product.name}
                description={product.description}
                category={product.category}
                userCategory={product.userCategory}
                product={product}
              />
            ))}
          </div>
          
     

          <div className=" w-full flex items-center justify-center mt-10 ">
            <Link href={"/directory"}>
            <button className=" flex gap-2 rounded-full bg-primary2 text-primary1 font-bold px-6 py-3 text-xs transition-all  w-fit border items-center hover:border-primary1 hover:text-primary1 hover:gap-4 duration-200">
              View All
              <IoIosArrowRoundForward className=" text-xl" />
            </button>
            </Link>
          </div>
        </div>
        <div className="h-fit md:h-fit w-full md:col-span-1 sticky top-0">
          <div className=" md:px-4">
            <div className="h-fit md:h-fit bg-primary2  rounded-xl px-8 py-10 flex flex-col gap-5 ">
              <div className=" h-12 w-12 rounded-full bg-primary1 inline-flex justify-center items-center">
                <FaArrowUp className=" text-white text-[28px]" />
              </div>
              <h3 className=" font-bold text-xl ">Browse  categories</h3>
             
             

              {category.map((item: any) => (
               <Link href={item.link} key={item.name}>
                <button   className=" flex gap-2 w-full rounded-full transition-all duration-200 bg-primary2 border border-primary1 text-primary1 font-bold px-6 py-3 text-xs  items-center justify-center hover:bg-primary2 hover:text-primary1 hover:gap-4">
                  {item.name}
                  <IoIosArrowRoundForward className=" text-xl" />
                </button>
               </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
