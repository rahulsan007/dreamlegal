import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

function ContactForm() {
  return (
    <div>
      <form action="" className="bg-white px-5 py-6 space-y-6">
        <div className="grid grid-cols-2 gap-4 font-clarity ">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-xs font-bold text-gray-900 ml-2"
            >
              Full name
            </label>
            <input
              type="text"
              className="rounded-full border text-sm border-slate-200 px-5 py-4 shadow-sm w-full"
              placeholder="What is your name?"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-bold text-gray-900 ml-2"
            >
              Email address
            </label>
            <input
              type="email"
              className="rounded-full border text-sm border-slate-200 px-5 py-4 shadow-sm w-full"
              placeholder="What is your email?"
              name="email"
              id="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 font-clarity ">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-xs font-bold text-gray-900 ml-2"
            >
              Phone number
            </label>
            <input
              type="text"
              className="rounded-full border text-sm border-slate-200 px-5 py-4 shadow-sm w-full"
              placeholder="What is your Phone number?"
              name="phone"
              id="phone"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="location"
              className="text-xs font-bold text-gray-900 ml-2"
            >
              Location
            </label>
            <input
              type="text"
              className="rounded-full border text-sm border-slate-200 px-5 py-4 shadow-sm w-full"
              placeholder="ex. Mumbai, Delhi"
              name="location"
              id="location"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 font-clarity ">
          <div className="flex flex-col gap-2 col-span-2">
            <label
              htmlFor="message"
              className="text-xs font-bold text-gray-900 ml-2"
            >
              Message
            </label>
            <textarea
              className="rounded-xl border text-sm border-slate-200 px-5 py-4 shadow-sm w-full"
              placeholder="Tell us about your query..."
              name="message"
              id="message"
              rows={5}
            />
          </div>
        </div>

        <div className=" flex gap-6 items-center">
          <button
            type="submit"
            className="  flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-gray-900 hover:gap-4"
          >
            Send us
            <AiOutlineSend className=" text-xl" />
          </button>

          <div className="flex gap-4 items-center">
            <div className="text-primary1 p-3 rounded-full bg-primary2">
              <Link href={"/"}>
                <TiSocialFacebook className="text-2xl " />
              </Link>
            </div>

            <div className="text-primary1 p-3 rounded-full bg-primary2">
              <Link href={"/"}>
                <FaLinkedinIn className="text-2xl " />
              </Link>
            </div>

            <div className="text-primary1 p-3 rounded-full bg-primary2">
              <Link href={"/"}>
                <FaTwitter className="text-2xl " />
              </Link>
            </div>

            <div className="text-primary1 p-3 rounded-full bg-primary2">
              <Link href={"/"}>
                <RiInstagramFill className="text-2xl " />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
