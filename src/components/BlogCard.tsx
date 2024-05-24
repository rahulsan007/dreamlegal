import React from "react";
import { FaRegClock } from "react-icons/fa6";

function BlogCard() {
  return (
    <div className="relative rounded-xl overflow-hidden  shadow transition-all duration-200 group hover:cursor-pointer hover:translate-y-1 hover:shadow-md">
      <div className="relative">
        <img
          src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63c088d461f8ba9f0e462579_how-to-build-and-launch-your-first-saas-application-aggregator-x-webflow-template-p-500.jpg"
          alt=""
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
      </div>
      <div className="pb-10 px-8 relative z-20">
        <span className="text-sm text-primary1 py-4 px-4 rounded-full bg-primary2">
          Development
        </span>
        <div className="flex flex-col gap-3 mt-8 mb-2">
          <h3 className="text-xl font-bold group-hover:text-primary1">
            How to build and launch your first SaaS application
          </h3>
          <div className="inline-flex justify-between">
            <p className="text-sm text-[#46526a]">Jan 12, 2023</p>
            <p className="text-sm text-[#46526a] flex gap-2 items-center">
              <FaRegClock /> 3 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
