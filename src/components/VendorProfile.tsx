import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { HiOutlinePencil } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function VendorProfile() {
  const [details, setDetails] = useState(true);
  const [CompDetails, setCompDetails] = useState(true);
  const [Account, setAccount] = useState(false);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <>
          <div className="font-clarity border rounded-md shadow  md:block">
            <div className=" py-6 px-6 ">
              <div className="flex flex-col justify-center items-center">
                <Avatar className="w-24 rounded-full">
                  <AvatarImage
                    className="rounded-full"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className=" text-lg font-bold text-gray-900">
                  Rahul Santra
                </h3>
                <p className=" text-sm text-slate-500">@rahulsantra</p>
              </div>
              <div className="py-5">
                <div className=" flex justify-between items-center">
                  <h3
                    onClick={() => setDetails(!details)}
                    className=" text-sm font-bold text-gray-900 flex gap-2 pr-5 items-center hover:cursor-pointer"
                  >
                    <MdOutlineKeyboardArrowDown />
                    Details
                  </h3>
                  <button className="text-primary1 text-sm flex gap-2 pr-5">
                    <HiOutlinePencil />
                    Edit{" "}
                  </button>
                </div>
                <div>
                  <ul
                    className={`mt-2 space-y-2 transition-all duration-200 ${
                      !details ? "hidden" : ""
                    }`}
                  >
                    <li className="grid grid-cols-2 pr-5">
                      {/* <MdAlternateEmail className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500">Email</p>
                      <p className=" text-sm text-gray-900">
                        l5k7H@example.com
                      </p>
                    </li>

                    <li className="grid grid-cols-2 pr-5">
                      {/* <TiWorldOutline className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500">Location</p>
                      <p className=" text-sm text-gray-900">Mumbai, India</p>
                    </li>

                    <li className="grid grid-cols-2 pr-5">
                      {/* <GoOrganization className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500">Address</p>
                      <p className=" text-sm text-gray-900">
                        Solitaire space, sec 6 Panvel
                      </p>
                    </li>

                    <li className="grid grid-cols-2 pr-5">
                      {/* <GoOrganization className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500">Contact</p>
                      <p className=" text-sm text-gray-900">9876543210</p>
                    </li>

                    <li className="hover:cursor-pointer pr-5">
                      {/* <GoOrganization className="text-primary1" /> */}

                      <p className=" text-sm text-primary1">Change password</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="py-5">
                <div className=" flex justify-between items-center">
                  <h3
                    onClick={() => setCompDetails(!CompDetails)}
                    className=" text-sm font-bold text-gray-900 flex gap-2 pr-5 items-center hover:cursor-pointer"
                  >
                    <MdOutlineKeyboardArrowDown />
                    Company Details
                  </h3>
                  <button className="text-primary1 text-sm grid grid-cols-2 pr-5">
                    <HiOutlinePencil />
                    Edit{" "}
                  </button>
                </div>
                <div>
                  <ul
                    className={`mt-2 space-y-2 transition-all duration-200 ${
                      !CompDetails ? "hidden" : ""
                    }`}
                  >
                    <li className="grid grid-cols-2 pr-5">
                      {/* <MdAlternateEmail className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500">Designation</p>
                      <p className=" text-sm text-gray-900">Senior Advocate</p>
                    </li>

                    <li className="grid grid-cols-2 pr-5">
                      {/* <TiWorldOutline className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500">Type</p>
                      <p className=" text-sm text-gray-900">Law Firm</p>
                    </li>

                    <li className="grid grid-cols-2 pr-5">
                      {/* <GoOrganization className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500">Address</p>
                      <p className=" text-sm text-gray-900">
                        Solitaire space, sec 6 Panvel
                      </p>
                    </li>

                    <li className="grid grid-cols-2 pr-5">
                      {/* <GoOrganization className="text-primary1" /> */}
                      <p className=" text-sm text-slate-500"> Email</p>
                      <p className=" text-sm text-gray-900">
                        5k0f6@example.com
                      </p>
                    </li>

                    <li></li>
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
        </>
      </div>
    </div>
  );
}

export default VendorProfile;
