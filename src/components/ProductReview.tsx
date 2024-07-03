import React from "react";
import ProductAllReviewProgressbar from "./ProductAllReviewProgressbar";
import AllReview from "./AllReview";

function ProductReview({ product }: any) {
  return (
    <div>
      <ProductAllReviewProgressbar />
      <AllReview product={product} />
    </div>
  );
}

export default ProductReview;
