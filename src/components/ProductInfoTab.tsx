import { FaCircleCheck } from "react-icons/fa6";

import { GrDeploy } from "react-icons/gr";
import { TiWorldOutline } from "react-icons/ti";
import { CiMobile3 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

function ProductInfoTab() {
  return (
    <div>
      <div className="grid max-w-md gap-5 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3 font-clarity">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
              <GrDeploy className=" text-primary1 w-4 h-4" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">Deployment</h6>
            <p className="mb-3 text-sm text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                SaaS
              </li>{" "}
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                On-premise
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Hybrid
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
              <TiWorldOutline className=" text-primary1 w-5 h-5" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">
              Focus countries
            </h6>
            <p className="mb-3 text-sm text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Singapore
              </li>{" "}
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                India
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Bangladesh
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Pakistan
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Russia
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
              <CiMobile3 className=" text-primary1 w-5 h-5" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">Accessibility</h6>
            <p className="mb-3 text-sm text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Mobile
              </li>{" "}
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Desktop
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Web
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid max-w-md gap-5 row-gap-10 sm:mx-auto mt-3 lg:max-w-full lg:grid-cols-2 font-clarity">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
              <SlCalender className=" text-primary1 w-4 h-4" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">
              Average adoption time
            </h6>
            <p className="mb-3 text-sm text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCalendarAlt className="w-5 h-5 mt-px text-primary1" />
                </span>
                3 months
              </li>{" "}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary2">
              <IoLanguage className=" text-primary1 w-4 h-4" />
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-bold text-lg leading-5">Language</h6>
            <p className="mb-3 text-sm text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Hindi
              </li>{" "}
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Marathi
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                Gujrathi
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <FaCircleCheck className="w-5 h-5 mt-px text-primary1" />
                </span>
                English
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
      </div>
    </div>
  );
}

export default ProductInfoTab;
