"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { HiOutlinePencil } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdEdit, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";

interface Profile {
  companyName: string;
  website: string;
  yearFounded: string;
  headQuaters: string;
  NameOfFounders: string;
  contact: string;
  founderVision: string;
  regionServed: string;
  TeamSize: string;
  Awards: string;
  PointOfContactName: string;
  PointOfContactPhone: string;
  PointOfContactDesignation: string;
  overview: string;
}
function VendorProfile({
  verified,
  getProfile,
}: {
  verified: boolean;
  getProfile: any;
}) {
  const [details, setDetails] = useState(true);
  const [CompDetails, setCompDetails] = useState(true);
  const [Account, setAccount] = useState(false);
  const [verify, setVerified] = useState(verified);
  const [open, setOpen] = useState(verified ? true : false);
  const [vendorId, setVendorId] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile | null>(getProfile);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const storedVendorId = localStorage.getItem("vendorId");
    if (storedVendorId) {
      setVendorId(storedVendorId);
    }
  }, []);

  useEffect(() => {
    if (vendorId) {
      const fetchProfile = async () => {
        try {
          const response = await fetch(`/api/company-info?id=${vendorId}`);
          const data = await response.json();
          setProfile(data.profile);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfile();
    } else {
      const storedVendorId = localStorage.getItem("vendorId");
      const fetchProfile = async () => {
        try {
          const response = await fetch(
            `/api/company-info?id=${storedVendorId}`
          );
          const data = await response.json();
          setProfile(data.profile);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    }
  }, [vendorId]);

  useEffect(() => {
    if (profile) {
      setFormData({
        companyName: profile.companyName,
        website: profile.website,
        yearFounded: profile.yearFounded,
        headQuaters: profile.headQuaters,
        NameOfFounders: profile.NameOfFounders,
        contact: profile.contact,
        founderVision: profile.founderVision,
        regionServed: profile.regionServed,
        TeamSize: profile.TeamSize,
        Awards: profile.Awards,
        overview: profile.overview,
        PointOfContactName: profile.PointOfContactName,
        PointOfContactPhone: profile.PointOfContactPhone,
        PointOfContactDesignation: profile.PointOfContactDesignation,
      });
    }
  }, [profile]);

  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    yearFounded: "",
    headQuaters: "",
    NameOfFounders: "",
    contact: "",
    founderVision: "",
    regionServed: "",
    TeamSize: "",
    Awards: "",
    overview: "",
    PointOfContactName: "",
    PointOfContactPhone: "",
    PointOfContactDesignation: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!vendorId) {
      console.error("Vendor ID is missing.");
      return;
    }

    try {
      const res = await fetch("/api/company-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, vendorId }),
      });

      const result = await res.json();
      if (result.success) {
        console.log("Form data submitted:", result.profile);
        setOpen(false);
        // Redirect to a success page or handle success
      } else {
        console.error("Error:", result.msg);
        setOpen(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setOpen(false);
    }
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault();
    if (!vendorId) {
      console.error("Vendor ID is missing.");
      return;
    }

    try {
      const res = await fetch("/api/edit-company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, vendorId }),
      });

      const result = await res.json();
      if (result.success) {
        console.log("Form data submitted:", result.profile);
        setOpen(false);
        // Redirect to a success page or handle success
        setProfile(result.profile);

        // Optionally, reset the form data to the updated profile data
        setFormData(result.profile);
        setIsEditing(false);
      } else {
        console.error("Error:", result.msg);
        setOpen(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setOpen(false);
    }
  };

  const handleSelectChange = (value: any) => {
    setFormData({ ...formData, TeamSize: value });
  };

  const handlelogout = () => {
    localStorage.removeItem("vendorId");
    router.push("/");
  };
  return (
    <>
      {profile && open === false && isEditing === false ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <>
              <div className="font-clarity border rounded-md shadow  md:block">
                <div className=" py-6 px-6 ">
                  <div className="py-5">
                    <div className=" flex justify-between items-center">
                      <h3
                        onClick={() => setDetails(!details)}
                        className=" text-sm font-bold text-gray-900 flex gap-2 pr-5 items-center hover:cursor-pointer"
                      >
                        <MdOutlineKeyboardArrowDown />
                        Company Details
                      </h3>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-primary1 text-sm flex gap-2 pr-5"
                      >
                        <HiOutlinePencil />
                        Edit{" "}
                      </button>
                    </div>
                    <div>
                      <ul
                        className={`mt-2 space-y-2 transition-all duration-200 ${
                          !details ? "hidden" : ""
                        }`}
                      >
                        <li className="grid grid-cols-2 pr-5">
                          {/* <MdAlternateEmail className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">
                            Company Name
                          </p>
                          <p className=" text-sm text-gray-900">
                            {profile.companyName}
                          </p>
                        </li>
                        <li className="grid grid-cols-2 pr-5">
                          {/* <MdAlternateEmail className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Website</p>
                          <p className=" text-sm text-gray-900">
                            {profile.website}
                          </p>
                        </li>
                        <li className="grid grid-cols-2 pr-5">
                          {/* <MdAlternateEmail className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Overview</p>
                          <p className=" text-sm text-gray-900">
                            {profile.overview}
                          </p>
                        </li>

                        <li className="grid grid-cols-2 pr-5">
                          {/* <TiWorldOutline className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Location</p>
                          <p className=" text-sm text-gray-900">
                            {profile.headQuaters}
                          </p>
                        </li>

                        <li className="grid grid-cols-2 pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">
                            Year Founded
                          </p>
                          <p className=" text-sm text-gray-900">
                            {profile.yearFounded}
                          </p>
                        </li>

                        <li className="grid grid-cols-2 pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Contact</p>
                          <p className=" text-sm text-gray-900">
                            {profile.contact}
                          </p>
                        </li>

                        <li className="grid grid-cols-2 pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">
                            Name of Founders
                          </p>
                          <p className=" text-sm text-gray-900">
                            {profile.NameOfFounders}
                          </p>
                        </li>

                        <li className="grid grid-cols-2 pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">
                            Founders Vision
                          </p>
                          <p className=" text-sm text-gray-900">
                            {profile.founderVision}
                          </p>
                        </li>
                        <li className="grid grid-cols-2 pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">
                            {" "}
                            Region serverd
                          </p>
                          <p className=" text-sm text-gray-900">
                            {profile.regionServed}
                          </p>
                        </li>
                        <li className="grid grid-cols-2 pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Team</p>
                          <p className=" text-sm text-gray-900">
                            {profile.TeamSize}
                          </p>
                        </li>
                        <li className="grid grid-cols-2 pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Awards </p>
                          <p className=" text-sm text-gray-900">
                            {profile.Awards}
                          </p>
                        </li>
                        <li className="hover:cursor-pointer pr-5">
                          {/* <GoOrganization className="text-primary1" /> */}

                          <p className=" text-sm text-primary1">
                            Change password
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="py-5">
                    <div className=" flex justify-between items-center">
                      <h3
                        onClick={() => setCompDetails(!CompDetails)}
                        className=" text-sm font-bold text-gray-900 flex gap-2 pr-5 items-center hover:cursor-pointer"
                      >
                        <MdOutlineKeyboardArrowDown />
                        Point of Contact
                      </h3>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-primary1 text-sm grid grid-cols-2 pr-5"
                      >
                        <HiOutlinePencil />
                        Edit{" "}
                      </button>
                    </div>
                    <div>
                      <ul
                        className={`mt-2 space-y-2 transition-all duration-200 ${
                          !CompDetails ? "hidden" : ""
                        }`}
                      >
                        <li className="grid grid-cols-2 pr-5">
                          {/* <MdAlternateEmail className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Name</p>
                          <p className=" text-sm text-gray-900">
                            {profile.PointOfContactName}
                          </p>
                        </li>

                        <li className="grid grid-cols-2 pr-5">
                          {/* <MdAlternateEmail className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Phone</p>
                          <p className=" text-sm text-gray-900">
                            {profile.PointOfContactPhone}
                          </p>
                        </li>

                        <li className="grid grid-cols-2 pr-5">
                          {/* <MdAlternateEmail className="text-primary1" /> */}
                          <p className=" text-sm text-slate-500">Designation</p>
                          <p className=" text-sm text-gray-900">
                            {profile.PointOfContactDesignation}
                          </p>
                        </li>

                        <li></li>
                        <li>
                          <button
                            onClick={handlelogout}
                            className=" flex w-full gap-2 rounded-lg  px-4 py-2 bg-primary1 text-sm font-medium text-white items-center"
                          >
                            <CiLogout />
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      ) : null}

      {open ? (
        <>
          <div className="font-clarity">
            <h2 className=" text-lg font-bold flex gap-4 items-center">
              <span className="text-primary1 text-xl">
                <TbListDetails />
              </span>
              Complete your Vendor Profile
            </h2>
            <span className=" text-sm text-gray-500">
              Please fill the following details to Complete your Vendor Profile
            </span>
            <div className=" px-5 py-4  rounded-md border shadow-sm w-full md:w-2/3">
              <form onSubmit={handleSubmit} className=" w-full px-4 ">
                <div className=" mt-4">
                  <Label className=" text-slate-600" htmlFor="companyName">
                    Company Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="website">
                    Website
                  </Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="yearFounded">
                    Year Founded
                  </Label>
                  <Input
                    id="yearFounded"
                    value={formData.yearFounded}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="headQuaters">
                    Headquarters
                  </Label>
                  <Input
                    id="headQuaters"
                    value={formData.headQuaters}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="NameOfFounders">
                    Name Of Founders
                  </Label>
                  <Input
                    id="NameOfFounders"
                    value={formData.NameOfFounders}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="contact">
                    Contact
                  </Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="founderVision">
                    Founder Vision
                  </Label>
                  <Input
                    id="founderVision"
                    value={formData.founderVision}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="overview">
                    Overview
                  </Label>
                  <Textarea
                    id="overview"
                    value={formData.overview}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="regionServed">
                    Region Served
                  </Label>
                  <Input
                    id="regionServed"
                    value={formData.regionServed}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="TeamSize">
                    Team Size
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Team Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Team Size</SelectLabel>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="1-20">1-20</SelectItem>
                        <SelectItem value="20-50">20-50</SelectItem>
                        <SelectItem value="50-200">50-200</SelectItem>
                        <SelectItem value="200-500">200-500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="Awards">
                    Awards
                  </Label>
                  <Input
                    id="Awards"
                    value={formData.Awards}
                    onChange={handleChange}
                    required
                  />
                </div>
                <hr className="my-4" />
                <h3 className="text-lg font-bold text-gray-900">
                  Point Of Contact
                </h3>
                <div>
                  <Label
                    className=" text-slate-600"
                    htmlFor="PointOfContactName"
                  >
                    Point Of Contact Name
                  </Label>
                  <Input
                    id="PointOfContactName"
                    value={formData.PointOfContactName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label
                    className=" text-slate-600"
                    htmlFor="PointOfContactPhone"
                  >
                    Point Of Contact Phone
                  </Label>
                  <Input
                    id="PointOfContactPhone"
                    value={formData.PointOfContactPhone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label
                    className=" text-slate-600"
                    htmlFor="PointOfContactDesignation"
                  >
                    Point Of Contact Designation
                  </Label>
                  <Input
                    id="PointOfContactDesignation"
                    value={formData.PointOfContactDesignation}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="my-4 w-2/3 rounded-lg bg-primary1"
                >
                  Save
                </Button>
              </form>
            </div>
          </div>
        </>
      ) : null}

      {isEditing && (
        <>
          <div className=" font-clarity">
            <h2 className=" text-lg font-bold flex gap-4 items-center mb-4">
              <span className="text-primary1 text-xl">
                <MdEdit />
              </span>
              Edit Profile
            </h2>
            <div className=" px-5 py-4  rounded-md border shadow-sm w-full md:w-2/3">
              <form className="px-4" onSubmit={handleEditSubmit}>
                <h3 className=" font-bold text-gray-700 mt-2">
                  Edit Company Details
                </h3>

                <div>
                  <Label className=" text-slate-600" htmlFor="companyName">
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="website">
                    Website
                  </Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="overview">
                    Overview
                  </Label>
                  <Textarea
                    id="overview"
                    value={formData.overview}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="yearFounded">
                    Year Founded
                  </Label>
                  <Input
                    id="yearFounded"
                    value={formData.yearFounded}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="headQuaters">
                    Headquarters
                  </Label>
                  <Input
                    id="headQuaters"
                    value={formData.headQuaters}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="NameOfFounders">
                    Name Of Founders
                  </Label>
                  <Input
                    id="NameOfFounders"
                    value={formData.NameOfFounders}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="contact">
                    Contact
                  </Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="founderVision">
                    Founder Vision
                  </Label>
                  <Input
                    id="founderVision"
                    value={formData.founderVision}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="regionServed">
                    Region Served
                  </Label>
                  <Input
                    id="regionServed"
                    value={formData.regionServed}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="TeamSize">
                    Team Size
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Team Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Team Size</SelectLabel>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="1-20">1-20</SelectItem>
                        <SelectItem value="20-50">20-50</SelectItem>
                        <SelectItem value="50-200">50-200</SelectItem>
                        <SelectItem value="200-500">200-500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className=" text-slate-600" htmlFor="Awards">
                    Awards
                  </Label>
                  <Input
                    id="Awards"
                    value={formData.Awards}
                    onChange={handleChange}
                    required
                  />
                </div>
                <hr className="my-4" />
                <h3 className=" font-bold text-gray-700 mt-4">
                  Point Of Contact
                </h3>
                <div>
                  <Label
                    className=" text-slate-600"
                    htmlFor="PointOfContactName"
                  >
                    Point Of Contact Name
                  </Label>
                  <Input
                    id="PointOfContactName"
                    value={formData.PointOfContactName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label
                    className=" text-slate-600"
                    htmlFor="PointOfContactPhone"
                  >
                    Point Of Contact Phone
                  </Label>
                  <Input
                    id="PointOfContactPhone"
                    value={formData.PointOfContactPhone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label
                    className=" text-slate-600"
                    htmlFor="PointOfContactDesignation"
                  >
                    Point Of Contact Designation
                  </Label>
                  <Input
                    id="PointOfContactDesignation"
                    value={formData.PointOfContactDesignation}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleEditSubmit}
                  className="my-4 bg-primary1 w-2/3 text-white rounded-lg py-2 px-4"
                >
                  Save Edit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default VendorProfile;
