"use client";
import VendorSidebar from "@/components/VendorSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoIosNotificationsOutline } from "react-icons/io";
import VendorDashborad from "@/components/VendorDashborad";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu2Line } from "react-icons/ri";

import React, { useState } from "react";

function VendorDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const handleMenuItemClick = (menuName: string) => {
    setSelectedMenu(menuName);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-1">
          <div className="hidden md:block">
            {" "}
            <VendorSidebar
              onMenuItemClick={handleMenuItemClick}
              selectedMenu={selectedMenu}
            />
          </div>
        </div>
        <div className="col-span-4">
          <ScrollArea className=" h-screen">
            <div className=" w-full h-16 bg-white shadow mb-3  ">
              <div className=" w-full h-full flex items-center justify-between px-6">
                <div className="md:hidden">
                  <div className="flex items-center gap-4">
                    <Sheet>
                      <SheetTrigger asChild>
                        <button>
                          <RiMenu2Line className=" text-xl text-primary1" />
                        </button>
                      </SheetTrigger>
                      <SheetContent className="bg-[#002C76] text-white ">
                        <VendorSidebar />
                      </SheetContent>
                    </Sheet>
                    <div className=" font-bold text-xl ">Dreamlegal</div>
                  </div>
                </div>

                <IoIosNotificationsOutline className=" ml-auto text-2xl" />
              </div>
            </div>
            <div className=" px-5">
              {selectedMenu === "Dashboard" && <VendorDashborad />}
            </div>{" "}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default VendorDashboardPage;
