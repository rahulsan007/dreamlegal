import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { TiStar } from "react-icons/ti";
import { HiOutlinePencil } from "react-icons/hi";

function UserReviewCard() {
  return (
    <div className=" my-2">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://assets-global.website-files.com/63bed0273cfe5e611e742359/63c82fd5f0b9d119f5e3d6c0_webtech-featured-image-aggregator-x-webflow-template.svg" />
          <AvatarFallback>WB</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <h3 className=" text-sm text-gray-900 font-bold">Webster</h3>
          <span className=" text-xs text-slate-500">2 days ago</span>
        </div>

        <div className="flex items-start ml-auto">
          <p className="flex gap-2 text-sm text-primary1">
            {" "}
            <HiOutlinePencil />
            Edit
          </p>
        </div>
      </div>
      <p className=" text-sm text-slate-500 my-2">
        keep update of all new and innovating products in the world{" "}
      </p>
      <div className="flex items-center gap-2">
        <TiStar className="text-[#FDB52A] h-5 w-5" />
        <TiStar className="text-[#FDB52A] h-5 w-5" />
        <TiStar className="text-[#FDB52A] h-5 w-5" />
        <TiStar className="text-[#FDB52A] h-5 w-5" />
      </div>
    </div>
  );
}

export default UserReviewCard;
