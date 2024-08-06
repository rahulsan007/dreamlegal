"use client";
import ProductDetailsAdmin from "@/components/ProductDetailsAdmin";
import Link from "next/link";
import React, { useState } from "react";

function Page( {params}: { params: { id: string } } ) {
  const [active, setActive] = useState("ProductDetails");

  const renderContent = () => {
    switch (active) {
      case "ProductDetails":
        return <ProductDetailsAdmin id={params.id} />;
      case "Reviews":
        return <div>Reviews Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full font-clarity">
      <div className="w-full px-6 py-4 border-b rounded-md">
        <span className="text-primary1">
            <Link href={"/web-admin/"}>
            Back to Dashboard</Link>
        </span>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-5">
          <div className="w-full col-span-1 border rounded-md shadow-sm h-fit sticky top-4">
            <ul className="list-none p-0">
              <li
                className={`p-2 cursor-pointer ${
                  active === "ProductDetails" ? "bg-primary1 text-white rounded-md" : ""
                }`}
                onClick={() => setActive("ProductDetails")}
              >
                Product Details
              </li>
              <li
                className={`p-2 cursor-pointer ${
                  active === "Reviews" ? "bg-primary1 text-white rounded-md" : ""
                }`}
                onClick={() => setActive("Reviews")}
              >
                Reviews
              </li>
            </ul>
          </div>
          <div className="w-full col-span-4 pl-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
