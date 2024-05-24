import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function CuratedCollection() {
  const curratedCollection = [
    {
      title: "App for Lawyers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit duis blandit viverra.",
      image: "/app1.png",
    },
    {
      title: "App for Law Firms",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit duis blandit viverra.",
      image: "/app2.png",
    },
    {
      title: "App for Enterprise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit duis blandit viverra.",
      image: "/app3.png",
    },
  ];
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 font-clarity">
      <h3 className="text-3xl font-bold text-center my-5 mb-10">
        Collections curated by our team
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {curratedCollection.map((item, index) => (
          <CuratedCollectionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function CuratedCollectionCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md group transition-all duration-200 hover:cursor-pointer hover:translate-y-1">
      <Image src={image} width={400} height={173} alt="app1"></Image>
      <div className="w-full py-10 px-10">
        <div className="flex flex-col gap-4 w-full">
          <h3 className=" text-lg font-bold transition-all duration-200 group-hover:text-primary1">
            {title}
          </h3>
          <p className=" text-sm text-slate-500">{description}</p>
          <button className=" flex gap-2 rounded-full  text-gray-900 font-bold  text-sm transition-all  w-fit items-center group-hover:text-primary1 group-hover:gap-4">
            Browse all app
            <IoIosArrowRoundForward className=" text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CuratedCollection;
