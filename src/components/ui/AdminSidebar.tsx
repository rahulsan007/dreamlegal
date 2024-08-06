"use client";
import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";
import { AiOutlineTags } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function AdminSidebar({ onMenuItemClick, selectedMenu }: any) {
  const [Products, setProducts] = useState(true);
  const [Vendors, setVendors] = useState(false);
  const [Users, setUsers] = useState(false);
  const [Reviews, setReviews] = useState(false);
  const [Admins, setAdmins] = useState(false);
  const [Logout, setLogout] = useState(false);
  const router = useRouter();



  const handlelogout = () => {
    localStorage.removeItem("vendorId");
    router.push("/");
  };
  return (
    <div className="bg-[#002C76] h-screen font-clarity px-4 py-6 flex flex-col">
      <h2 className="text-white text-xl font-bold">DreamLegal</h2>
      <div className="mt-10 flex flex-col flex-grow">
        <span className="text-slate-300"> Menu</span>
        <div className="flex flex-col flex-grow">
          <ul className="space-y-2 flex-grow">
            

            <li
              onClick={() => setProducts(!Products)}
              className={`flex justify-between text-sm items-center px-4 py-4 rounded-md transition-all duration-200 hover:cursor-pointer ${
                Products ? "text-white bg-[#034b8a]" : "text-slate-300"
              }`}
            >
              <span className={`flex gap-2 items-center `}>
                <AiOutlineTags className="text-xl" />
                Products
              </span>
              <FaChevronDown />
            </li>

          

            <li className="ml-10">
              <ul className={`space-y-2 ${Products ? "block" : "hidden"}`}>
                <li
                  onClick={() => onMenuItemClick("NewProduct")}
                  className={`text-slate-300 hover:cursor-pointer ${
                    selectedMenu === "NewProduct" ? "text-white" : ""
                  }`}
                >
                  New Product
                </li>
                <li
                  onClick={() => onMenuItemClick("AllProduct")}
                  className={`text-slate-300 hover:cursor-pointer ${
                    selectedMenu === "AllProduct" ? "text-white" : ""
                  }`}
                >
                  All Products
                </li>
              </ul>
            </li>

            <li
              onClick={() => setVendors(!Vendors)}
              className={`flex justify-between text-sm items-center px-4 py-4 rounded-md transition-all duration-200 hover:cursor-pointer ${
                Vendors ? "text-white bg-[#034b8a]" : "text-slate-300"
              }`}
            >
              <span className={`flex gap-2 items-center `}>
                <AiOutlineTags className="text-xl" />
                Vendors
              </span>
              <FaChevronDown />
            </li>

            <li className="ml-10">
              <ul className={`space-y-2 ${Vendors ? "block" : "hidden"}`}>
                <li
                  onClick={() => onMenuItemClick("NewVendor")}
                  className={`text-slate-300 hover:cursor-pointer ${
                    selectedMenu === "NewVendor" ? "text-white" : ""
                  }`}
                >
                  New Vendor
                </li>
                <li
                  onClick={() => onMenuItemClick("allProducts")}
                  className={`text-slate-300 hover:cursor-pointer ${
                    selectedMenu === "allProducts" ? "text-white" : ""
                  }`}
                >
                  All Vendors
                </li>
              </ul>
            </li>

            <li
              onClick={() => setUsers(!Users)}
              className={`flex justify-between text-sm items-center px-4 py-4 rounded-md transition-all duration-200 hover:cursor-pointer ${
                Users ? "text-white bg-[#034b8a]" : "text-slate-300"
              }`}
            >
              <span className={`flex gap-2 items-center `}>
                <AiOutlineTags className="text-xl" />
                Users
              </span>
              <FaChevronDown />
            </li>

            <li className="ml-10">
              <ul className={`space-y-2 ${Users ? "block" : "hidden"}`}>
                
                <li
                  onClick={() => onMenuItemClick("allProducts")}
                  className={`text-slate-300 hover:cursor-pointer ${
                    selectedMenu === "allProducts" ? "text-white" : ""
                  }`}
                >
                  All Users
                </li>
              </ul>
            </li>

            <li
              onClick={() => setReviews(!Reviews)}
              className={`flex justify-between text-sm items-center px-4 py-4 rounded-md transition-all duration-200 hover:cursor-pointer ${
                Reviews ? "text-white bg-[#034b8a]" : "text-slate-300"
              }`}
            >
              <span className={`flex gap-2 items-center `}>
                <AiOutlineTags className="text-xl" />
                Reviews
              </span>
              <FaChevronDown />
            </li>

            <li className="ml-10">
              <ul className={`space-y-2 ${Reviews ? "block" : "hidden"}`}>
                
                <li
                  onClick={() => onMenuItemClick("allProducts")}
                  className={`text-slate-300 hover:cursor-pointer ${
                    selectedMenu === "allProducts" ? "text-white" : ""
                  }`}
                >
                  All Reviews
                </li>
              </ul>
            </li>


            <li
              onClick={() => setAdmins(!Admins)}
              className={`flex justify-between text-sm items-center px-4 py-4 rounded-md transition-all duration-200 hover:cursor-pointer ${
                Admins ? "text-white bg-[#034b8a]" : "text-slate-300"
              }`}
            >
              <span className={`flex gap-2 items-center `}>
                <AiOutlineTags className="text-xl" />
                Admins
              </span>
              <FaChevronDown />
            </li>

            <li className="ml-10">
              <ul className={`space-y-2 ${Admins ? "block" : "hidden"}`}>
                
                <li
                  onClick={() => onMenuItemClick("allProducts")}
                  className={`text-slate-300 hover:cursor-pointer ${
                    selectedMenu === "allProducts" ? "text-white" : ""
                  }`}
                >
                  All Admins
                </li>
              </ul>
            </li>
           

            <li
              onClick={handlelogout}
              className={`flex justify-between text-sm items-center px-4 py-4 rounded-md transition-all duration-200 hover:cursor-pointer ${
                Logout ? "text-white bg-[#034b8a]" : "text-slate-300"
              }`}
            >
              <span className={`flex gap-2 items-center `}>
                <CiLogout className="text-xl" />
                Logout
              </span>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
