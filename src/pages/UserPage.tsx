"use client";
import UserDashboard from "@/components/UserDashboard";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SavedItems from "@/components/SavedItems";

function UserPage() {
  return (
    <div className="">
      {/* <Tabs defaultValue="overview" className="w-full">
        <TabsList className="">
          <TabsTrigger asChild value="overview">
            <button className=" text-primary1 bg-primary2 px-4 py-2">
              Overview
            </button>
          </TabsTrigger>
          <TabsTrigger asChild value="saved">
            <button className=" text-primary1 bg-primary2 px-4 py-2">
              Saved
            </button>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <UserDashboard />
        </TabsContent>
        <TabsContent value="saved">
          <SavedItems />
        </TabsContent>
      </Tabs> */}
      <UserDashboard />
    </div>
  );
}

export default UserPage;
