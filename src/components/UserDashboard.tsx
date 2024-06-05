import React from "react";
import BookMarkCard from "./BookMarkCard";
import { IoIosNotifications } from "react-icons/io";
import SliderElement from "./Silder";
import { ScrollArea } from "./ui/scroll-area";
import UserReviewCard from "./UserReviewCard";
import SavedItems from "./SavedItems";

function UserDashboard() {
  return (
    <div className="font-clarity">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <h2 className=" text-gray-900 text-xl font-bold ">
              Reviewed Products
            </h2>

            <ScrollArea className=" md:h-72 border rounded-md px-4 py-5">
              <UserReviewCard />
              <UserReviewCard />
              <UserReviewCard />
              <UserReviewCard />
              <UserReviewCard />
            </ScrollArea>
          </div>

          <div>
            <h2 className=" text-gray-900 text-xl font-bold ">
              Saved Resources
            </h2>
            <ScrollArea className=" md:h-72 border rounded-md px-4 py-5">
              <SavedItems />
              <SavedItems />
              <SavedItems />
              <SavedItems />
              <SavedItems />
            </ScrollArea>
          </div>
        </div>

        <h2 className=" text-gray-900 text-xl font-bold ">
          Followed and Bookmarked
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 my-4 ">
          <div className=" col-span-3">
            <SliderElement>
              <BookMarkCard />
              <BookMarkCard />
              <BookMarkCard />
              <BookMarkCard />
            </SliderElement>
          </div>
        </div>
      </div>
      <div>
        <h2 className=" text-gray-900 text-xl font-bold my-5 ">Notification</h2>
      </div>
      <div className="">
        <div className="md:pb-24">
          <div className="flex items-center gap-4 md:w-3/5">
            <div className="bg-primary2 text-primary1 p-3 rounded-full">
              <IoIosNotifications />
            </div>
            <span className="text-sm text-gray-900 font-bold">Dreamlegal</span>
            <span className="text-xs text-slate-500 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-5">1 day ago</span>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
