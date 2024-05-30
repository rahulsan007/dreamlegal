import { FaWalking } from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";
import { RiMobileDownloadLine } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { MdOutlineForum } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { PiVideoConference } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

function ProductService() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-lg font-bold leading-none">Demo</h5>
          <p className="mb-6 text-xs text-slate-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
            omnis iste natus.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2 row-gap-5 md:grid-cols-2">
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <GrTestDesktop className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Self Demo </h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <RiMobileDownloadLine className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Custom Prototype</h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <FaWalking className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Walkthrough</h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <MdOutlineOndemandVideo className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Video Demo</h6>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-5">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-lg font-bold leading-none">Supports</h5>
          <p className="mb-6 text-xs text-slate-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
            omnis iste natus.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2 row-gap-5 md:grid-cols-3">
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <IoIosCall className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Phone Call </h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <MdOutlineSupportAgent className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Live Chat</h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <FaRobot className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Bot Chat</h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <MdOutlineForum className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Coummunity Forum</h6>
          </div>

          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <FaUserTie className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Account Manager</h6>
          </div>

          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <IoTicketOutline className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Help ticket</h6>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-lg font-bold leading-none">Training</h5>
          <p className="mb-6 text-xs text-slate-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
            omnis iste natus.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-2 row-gap-5 md:grid-cols-2">
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <PiVideoConference className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Video Tutorial </h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <FaBookOpen className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">User manual</h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <FaUserGraduate className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">On Demand Training</h6>
          </div>
          <div className="max-w-md hover:cursor-pointer">
            <div className="flex items-center justify-center w-16 h-16 mb-4   rounded-lg bg-indigo-50">
              <GrCertificate className="w-8 h-8 text-primary1" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Certification</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductService;
