import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MdAlternateEmail } from "react-icons/md";
import { TiWorldOutline } from "react-icons/ti";
import { GoOrganization } from "react-icons/go";
import { FaUserTie } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

function UserProfile() {
  return (
    <div className="font-clarity">
      <div className=" py-5 px-4 ">
        <div className="flex flex-col justify-center items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className=" text-lg font-bold text-gray-900">Rahul Santra</h3>
          <p className=" text-sm text-slate-500">@rahulsantra</p>
        </div>
        <div className="py-5">
          <div className=" flex justify-between items-center">
            <h3 className=" text-sm font-bold text-gray-900">Details</h3>
            <button className="text-primary1 text-sm">Edit </button>
          </div>
          <div>
            <ul className="mt-6 space-y-2 ">
              <li className="flex gap-2">
                <MdAlternateEmail className="text-primary1" />
                <p className=" text-sm text-slate-500">l5k7H@example.com</p>
              </li>

              <li className="flex gap-2">
                <TiWorldOutline className="text-primary1" />
                <p className=" text-sm text-slate-500">India</p>
              </li>

              <li className="flex gap-2">
                <GoOrganization className="text-primary1" />
                <p className=" text-sm text-slate-500">UNO</p>
              </li>

              <li className="flex gap-2">
                <FaUserTie className="text-primary1" />
                <p className=" text-sm text-slate-500">Software Engineer</p>
              </li>

              <li className="flex gap-2">
                <MdBusinessCenter className="text-primary1" />
                <p className=" text-sm text-slate-500">Law Firms</p>
              </li>

              <li>
                <button className=" flex w-full gap-2 rounded-lg  px-4 py-2 bg-primary2 text-sm font-medium text-primary1 items-center">
                  <FaStar />
                  Add Review
                </button>
              </li>
              <li>
                <button className=" flex w-full gap-2 rounded-lg  px-4 py-2 bg-primary1 text-sm font-medium text-white items-center">
                  <CiLogout />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
