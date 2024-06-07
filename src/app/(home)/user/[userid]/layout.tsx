"use client";
import AddReview from "@/components/AddReview";
import SavedItems from "@/components/SavedItems";
import UserDashboard from "@/components/UserDashboard";
import UserProfile from "@/components/UserProfile";
import UserSidebar from "@/components/UserSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState("dashboard");

  let ActiveComponent;
  switch (activeTab) {
    case "dashboard":
      ActiveComponent = <UserDashboard />;
      break;
    case "saved":
      ActiveComponent = <SavedItems />;
      break;
    case "profile":
      ActiveComponent = <UserProfile />;
      break;
    case "addReview":
      ActiveComponent = <AddReview />;
      break;
    default:
      ActiveComponent = <UserDashboard />;
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-5 px-4">
      <div className="col-span-1  ">
        <UserProfile />
      </div>
      <div className="col-span-4">
        <ScrollArea className="h-screen  px-5 ">{children}</ScrollArea>
      </div>
    </div>
  );
}
