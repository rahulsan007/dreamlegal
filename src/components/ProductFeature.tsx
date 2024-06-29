import React from "react";
import { FiAward } from "react-icons/fi";

import { FaCircleCheck } from "react-icons/fa6";

function ProductFeature({ features }: any) {
  return (
    <div>
      <div>
        <div className="grid max-w-md gap-5 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3 font-clarity">
          {features.map((feature: any, index: any) => (
            <div key={index} className="flex flex-col sm:flex-row">
              <div className="sm:mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
                  <FiAward className="text-primary1 w-4 h-4" />
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-bold text-lg leading-5">
                  {feature.category}
                </h6>
                <ul className="mb-4 -ml-1 space-y-2">
                  {feature.subcategories.map(
                    (subcategory: any, subIndex: any) => (
                      <li key={subIndex} className="flex items-start">
                        <span className="mr-1">
                          <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                        </span>
                        {subcategory}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
