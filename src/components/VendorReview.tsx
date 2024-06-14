import React from "react";
import ProductAllReviewProgressbar from "./ProductAllReviewProgressbar";
import AllReview from "./AllReview";

function VendorReview() {
  return (
    <div>
      <ProductAllReviewProgressbar />
      <AllReview type="vendor" />
    </div>
  );
}

export default VendorReview;
