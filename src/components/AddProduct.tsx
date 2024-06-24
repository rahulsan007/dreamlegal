"use client";
import { useState } from "react";
import { IoIosInformation } from "react-icons/io";
import { ProductInformation } from "./ProductInformation";
// Import additional step components
import { Button } from "@/components/ui/button";
import ProductInfo from "./ProductInfo";

import CompanyInfo from "./CompanyInfo";
import { StepProvider, useStepContext } from "@/context/formContext";
import CustomerSegmentation from "./CustomerSegmentstion";
import FeaturesInfo from "./FeaturesInfo";
import PricingInfo from "./PricingInfo";
import SupportService from "./SupportService";

function AddProduct() {
  const { step, nextStep, prevStep } = useStepContext();

  return (
    <div className="font-clarity">
      <h1 className="text-xl font-bold">Add Product</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-6">
          <div className="w-full col-span-3 shadow border px-5 py-6 rounded-lg">
            <div>
              <ProductInfo />

              {/* Add more steps here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
