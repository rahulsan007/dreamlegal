"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function EditUser({ data , onCloseEdit}: any) {
  const path = useParams();
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const userId = path?.userid;
  const router = useRouter();
  const [formData, setFormData] = useState({
    Contact: data.profile?.Contact || "",
    Location: data.profile?.Location || "",
    Address: data.profile?.Address || "",
    Designation: data.profile?.Designation || "",
    CompanyType: data.profile?.CompanyType || "",
    CompanyAddress: data.profile?.CompanyAddress || "",
    CompanyEmail: data.profile?.CompanyEmail || "",
    ProfileImage: null,
    MarketingAccept: false,
    editing: true,
  });
  const handleChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const uploadFile = async (file: File, folderName: string) => {
    // Create the form data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folderName", folderName);

    try {
      // Send the POST request
      const response = await fetch("/api/upload-file", {
        method: "POST",
        body: formData,
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const url = data.location;
          console.log("Uploaded file location:", url);
          return url;
        } else {
          console.error("Upload failed:", data.error);
        }
      } else {
        console.error("Failed to upload file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    return null;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    try {
      if (formData.ProfileImage) {
        const response = await uploadFile(formData.ProfileImage, "profile");
        setLogoPreview(response);
      }
      const response = await fetch("/api/edit-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userId, logoPreview }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Profile created successfully:", result.profile);
        onCloseEdit();
      } else {
        console.error("Error creating profile:", result.msg);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form submitted:", formData);
  };
  return (
    <main className="">
      <div className="max-w-xl lg:max-w-3xl">
       
        <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-xl md:text-xl">
          Edit Profile
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 ">
            <label
              htmlFor="Location"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Image <span className="text-slate-400">optional</span>
            </label>

            <Input
              type="file"
              id="ProfileImage"
              name="ProfileImage"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>

            <input
              type="text"
              id="Contact"
              name="Contact"
              required
              value={formData.Contact}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>

            <input
              type="text"
              id="Location"
              required
              name="Location"
              value={formData.Location}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Address"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Address{" "}
            </label>

            <input
              type="text"
              id="Address"
              required
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Designation"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Designation{" "}
            </label>

            <input
              type="text"
              id="Designation"
              required
              name="Designation"
              value={formData.Designation}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="CompanyType"
              className="block text-sm font-medium text-gray-700"
            >
              Company Type
            </label>

            <input
              type="text"
              id="CompanyType"
              name="CompanyType"
              required
              value={formData.CompanyType}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="CompanyAddress"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Company Address{" "}
            </label>

            <input
              type="text"
              id="CompanyAddress"
              name="CompanyAddress"
              required
              value={formData.CompanyAddress}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="CompanyEmail"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Company Email{" "}
            </label>

            <input
              type="email"
              id="CompanyEmail"
              name="CompanyEmail"
              required
              value={formData.CompanyEmail}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border bg-primary1 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default EditUser;
