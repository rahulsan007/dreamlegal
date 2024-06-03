import React from "react";
import BookMarkCard from "./BookMarkCard";
import { IoIosNotifications } from "react-icons/io";

function UserDashboard() {
  return (
    <div className="font-clarity">
      <div>
        <h2 className=" text-gray-900 text-xl font-bold ">
          Followed and Bookmarked
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 my-4 ">
          <BookMarkCard />
          <BookMarkCard />
          <BookMarkCard />
          <BookMarkCard />
        </div>
      </div>
      <div>
        <h2 className=" text-gray-900 text-xl font-bold my-5 ">Notification</h2>
      </div>
      <div className="">
        <div className="md:pb-24">
          <div className="flex items-center gap-4">
            <div className="bg-primary2 text-primary1 p-3 rounded-full">
              <IoIosNotifications />
            </div>
            <span className="text-sm text-gray-900 font-bold">Dreamlegal</span>
            <span className="text-xs text-slate-500 md:w-3/5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptatibus perspiciatis officia commodi nulla,
              aliquid ducimus quidem exercitationem incidunt maiores debitis,
              error minima ad accusantium! Sapiente eos molestiae quis ratione!
            </span>
          </div>
          <span className="text-xs text-slate-500 mt-5">1 day ago</span>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
