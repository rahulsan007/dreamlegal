import React from "react";
import { Progress } from "@/components/ui/progress";
import { FaStar } from "react-icons/fa6";

function ProductAllReviewProgressbar() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <h2 className=" text-lg font-bold text-gray-900 pb-2">
          Overall Rating
        </h2>
        <div className="inline-flex gap-4 items-center">
          <FaStar className="text-[#FDB52A] h-16 w-16" />
          <p className=" text-[#FDB52A] text-[45px]">
            {" "}
            4.5
            <span className="text-[35px]">/5</span>
          </p>
        </div>
        <p className=" text-slate-500">Based on 1000+ reviews</p>
      </div>
      <div className="flex flex-col gap-2 font-clarity">
        <div>
          <div className="flex justify-between items-center">
            <h2 className=" text-lg font-bold text-gray-900">Features</h2>
            <h3 className=" text-[#FDB52A]">4.5/5</h3>
          </div>
          <Progress value={70} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className=" text-lg font-bold text-gray-900">
              Value for money
            </h2>
            <h3 className=" text-[#FDB52A]">4.5/5</h3>
          </div>
          <Progress value={70} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className=" text-lg font-bold text-gray-900">Easy to use</h2>
            <h3 className=" text-[#FDB52A]">4.5/5</h3>
          </div>
          <Progress value={70} className="h-2" />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h2 className=" text-lg font-bold text-gray-900">
              Customer support
            </h2>
            <h3 className=" text-[#FDB52A]">4.5/5</h3>
          </div>
          <Progress value={70} className="h-2" />
        </div>
      </div>
    </div>
  );
}

export default ProductAllReviewProgressbar;
