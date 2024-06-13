import React from "react";
import VendorProductCard from "../VendorProductCard";

function AllProducts() {
  return (
    <div className=" flex flex-col gap-4">
      <VendorProductCard />
      <VendorProductCard />
      <VendorProductCard />
      <VendorProductCard />
    </div>
  );
}

export default AllProducts;
