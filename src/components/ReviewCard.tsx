import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TiStar } from "react-icons/ti";
import { Rating } from "@mui/material";

function ReviewCard({review, overallRating}:any) {
  return (
    <div className=" my-2">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src={review.user.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <h3 className=" text-sm text-gray-900 font-bold">{review.user.name}</h3>
          
        </div>
      </div>
      <p className=" text-sm text-slate-500 my-2">
        {review.overallExperienc}{" "}
      </p>
      <div className="flex items-center gap-2">
        <Rating value={overallRating} precision={0.5} readOnly />
      </div>
    </div>
  );
}

export default ReviewCard;
