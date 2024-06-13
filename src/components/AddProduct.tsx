"use client";
import React, { useState } from "react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
          <div className="w-full shadow border px-5 py-6 rounded-lg">
            <div>
              <h2 className="text-gray-900 text-xl font-bold flex gap-2 items-center">
                <span className="border rounded-full border-primary1 p-1 text-2xl">
                  <IoIosInformation />
                </span>
                {step === 1 && "Product Information"}
                {step === 2 && "Company Information"}
                {step === 3 && "Customer Segmentation"}
                {step === 4 && "Features"}
                {step === 5 && "Pricing Information"}
                {step === 6 && "Support Service and Refernces"}
              </h2>
              {step === 1 && <ProductInfo />}
              {step === 2 && <CompanyInfo />}
              {step === 3 && <CustomerSegmentation />}
              {step === 4 && <FeaturesInfo />}
              {step === 5 && <PricingInfo />}
              {step === 6 && <SupportService />}

              {/* Add more steps here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
