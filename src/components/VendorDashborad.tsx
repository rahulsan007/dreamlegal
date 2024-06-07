"use client";
import React, { useEffect, useState } from "react";
import CardDataStats from "./CardDataStat";
import { FaRegEye } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";
import { GoIterations } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import dynamic from "next/dynamic";

const ChartOne = dynamic(() => import("./ChartOne"), { ssr: false });
const ChartTwo = dynamic(() => import("./ChartTwo"), { ssr: false });
const ChartThree = dynamic(() => import("./ChartThree"), { ssr: false });
const MapOne = dynamic(() => import("./MapOne"), { ssr: false });

function VendorDashboard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Unique Views" total="3.456K" rate="0.43%" levelUp>
          <FaRegEye className="fill-primary1 h-6 w-6 " />
        </CardDataStats>
        <CardDataStats
          title="Total Followers"
          total="45,2K"
          rate="4.35%"
          levelUp
        >
          <RiUserFollowLine className="fill-primary1 h-6 w-6 " />
        </CardDataStats>
        <CardDataStats
          title="Login users visits"
          total="2,450"
          rate="2.59%"
          levelUp
        >
          <GoIterations className="fill-primary1 h-6 w-6 " />
        </CardDataStats>
        <CardDataStats title="Total Share" total="3456" rate="0.95%" levelDown>
          <FiShare2 className="fill-primary1 h-6 w-6 " />
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
        <div className="col-span-12 lg:col-span-6">
          <ChartOne />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ChartTwo />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ChartThree />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <MapOne />
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
