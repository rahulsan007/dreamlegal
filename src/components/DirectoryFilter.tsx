"use client";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { ScrollArea } from "./ui/scroll-area";

// Assuming you have this file for styles

function DirectoryFilter() {
  const [openCategory, setOpenCategory] = useState({
    category: false,
    customer: false,
    country: false,
    pricing: false,
    deployment: false,
    mobile: false,
    lang: false,
    industry: false,
    practice: false,
  });

  const toggleOpenCategory = (category: string) => {
    setOpenCategory((prevState) => ({
      category: category === "category" ? !prevState.category : false,
      customer: category === "customer" ? !prevState.customer : false,
      country: category === "country" ? !prevState.country : false,
      pricing: category === "pricing" ? !prevState.pricing : false,
      deployment: category === "deployment" ? !prevState.deployment : false,
      mobile: category === "mobile" ? !prevState.mobile : false,
      lang: category === "lang" ? !prevState.lang : false,
      industry: category === "industry" ? !prevState.industry : false,
      practice: category === "practice" ? !prevState.practice : false,
    }));
  };

  return (
    <ScrollArea className="h-screen  pb-10 w-full">
      <div className="space-y-2 font-clarity">
        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("category")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Categories </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.category ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.category ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("customer")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Customer segment </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.customer ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.customer ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("country")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium">
                  {" "}
                  Availabile country{" "}
                </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.country ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.country ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("pricing")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Pricing </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.pricing ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.pricing ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("deployment")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Deployement </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.deployment ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.deployment ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("mobile")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Mobile Available </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.mobile ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.mobile ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("lang")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Language </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.lang ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.lang ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("industry")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Industies </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.industry ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.industry ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div
            className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition-all duration-200"
            onClick={() => toggleOpenCategory("practice")}
          >
            <div>
              <div className="inline-flex items-center gap-3">
                <MdOutlineBusinessCenter className=" w-5 h-5" />

                <span className="text-sm font-medium"> Practice Area </span>
              </div>
            </div>
            <span
              className={`transition-all ml-auto ${
                openCategory.practice ? "rotate-90" : ""
              }`}
            >
              <IoArrowForward />
            </span>
          </div>

          <div
            className={`transition-height duration-300 ease-in-out ${
              openCategory.practice ? "max-h-screen" : "max-h-0"
            }`}
          >
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700"> 0 Selected </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <ul className="space-y-1 border-t border-gray-200 p-4">
              <li>
                <label
                  htmlFor="FilterInStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterInStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    In Stock (5+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterPreOrder"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterPreOrder"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Pre Order (3+){" "}
                  </span>
                </label>
              </li>

              <li>
                <label
                  htmlFor="FilterOutOfStock"
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id="FilterOutOfStock"
                    className="size-5 rounded border-gray-300"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {" "}
                    Out of Stock (10+){" "}
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-gray-900 hover:gap-4 duration-200 my-3">
        Apply
      </button>
    </ScrollArea>
  );
}

export default DirectoryFilter;
