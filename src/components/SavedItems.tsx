import React from "react";
import BlogCard from "./BlogCard";

function SavedItems() {
  return (
    <div className="font-clarity">
      <div className=" mb-4">
        <h2 className=" text-gray-900 text-xl font-bold ">Saved Resources</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default SavedItems;
