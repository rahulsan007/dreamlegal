import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TiStar } from "react-icons/ti";

function ReviewCard() {
  return (
    <div className=" my-2">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <h3 className=" text-sm text-gray-900 font-bold">Rahul Santra</h3>
          <span className=" text-xs text-slate-500">2 days ago</span>
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

export default ReviewCard;
