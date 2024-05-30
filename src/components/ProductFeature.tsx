import React from "react";
import { FiAward } from "react-icons/fi";

import { FaCircleCheck } from "react-icons/fa6";

function ProductFeature() {
  return (
    <div>
      <div className="grid max-w-md gap-5 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3 font-clarity">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
              <FiAward className=" text-primary1 w-4 h-4" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">
              Document Editing
            </h6>

            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Web editing
              </li>{" "}
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Multiple editing
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Collaborate editing
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
              <FiAward className=" text-primary1 w-5 h-5" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">Communication</h6>

            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Chat Communication
              </li>{" "}
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Video Communication
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Audio Communication
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                More
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
              <FiAward className=" text-primary1 w-5 h-5" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">Security</h6>

            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Mobile Security
              </li>{" "}
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                SSL
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                2FA
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                3FA
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Web Secure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
