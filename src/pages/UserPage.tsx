"use client"
import UserDashboard from "@/components/UserDashboard";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import UserProfile from "@/components/UserProfile";
import { ScrollArea } from "@/components/ui/scroll-area";
import Loading from "@/components/Loading";

function UserPage({ data }: any) {
  const path = useParams();
  const searchParams = useSearchParams();
  const userId = path?.userid;

  // Add logging for debugging
  useEffect(() => {
    console.log("UserPage data:", data);
  }, [data]);

  // Ensure data is available
  if (!data) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 px-4">
      <div className="col-span-1">
        <div style={{ maxWidth: "100%" }}>
          <UserProfile data={data} />
        </div>
      </div>
      <div className="col-span-4">
        <ScrollArea className="h-screen px-5">
          <UserDashboard />
        </ScrollArea>
      </div>
    </div>
  );
}

export default UserPage;
