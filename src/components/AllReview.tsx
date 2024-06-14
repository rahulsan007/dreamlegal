import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewCard from "./ReviewCard";

function AllReview({ type = "user" }: any) {
  return (
    <div className=" font-clarity mt-5">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className=" text-lg  text-gray-900">1080+ Reviews</h2>
        <div className=" flex gap-4">
          <Select value="best">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="best">Best</SelectItem>
              <SelectItem value="most-recent">Most Recent</SelectItem>
              <SelectItem value="negative">Negative</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <input
          type="text"
          className=" border border-slate-300 rounded-lg py-2 px-4 w-full my-4"
          placeholder="Search for reviews..."
        />
        {type === "user" ? (
          <button className=" bg-primary1 text-white py-4 px-4 rounded-lg text-xs md:w-[200px]">
            Add Review
          </button>
        ) : null}
      </div>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
}

export default AllReview;
