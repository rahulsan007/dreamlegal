import React from "react";
import YoutubeEmbed from "./YoutubeVideo";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function ProductReference({ embedId }: { embedId: string }) {
  return (
    <div>
      <YoutubeEmbed embedId={embedId} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" flex gap-3 flex-wrap my-4">
          <div className="flex gap-2 items-center bg-primary1 px-3 py-3 rounded-2xl text-white">
            <FaLink />
            <Link className="" href={"/"}>
              Link 1
            </Link>
          </div>

          <div className="flex gap-2 items-center bg-primary1 px-3 py-3 rounded-2xl text-white">
            <FaLink />
            <Link className="" href={"/"}>
              Link 2
            </Link>
          </div>

          <div className="flex gap-2 items-center bg-primary1 px-3 py-3 rounded-2xl text-white">
            <FaLink />
            <Link className="" href={"/"}>
              Link 3
            </Link>
          </div>
        </div>
        <div className=" flex gap-3 flex-wrap my-4 md:justify-end">
          <div className="flex gap-2 items-center text-primary1 p-5 rounded-full bg-primary2">
            <FaFacebook className=" text-lg" />
          </div>

          <div className="flex gap-2 items-center text-primary1 p-5 rounded-full bg-primary2">
            <FaInstagram className=" text-lg" />
          </div>

          <div className="flex gap-2 items-center text-primary1 p-5 rounded-full bg-primary2">
            <FaYoutube className=" text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReference;
