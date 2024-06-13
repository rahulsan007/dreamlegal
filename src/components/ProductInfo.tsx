"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { useStepContext } from "@/context/formContext";

function ProductInfo() {
  const { step, nextStep, prevStep } = useStepContext();

  const [business, setBusiness] = useState(false);
  const [productivity, setProductivity] = useState(false);
  const [startup, setStartup] = useState(false);
  const [formValues, setFormValues] = useState({
    prname: "",
    shortDec: "",
    category: "",
    tags: {
      business: false,
      productivity: false,
      startups: false,
    },
    cpname: "",
    hqLocation: "",
    bemail: "",
    foundedYr: "",
    founders: "",
    bphone: "",
    status: "",
    companyType: "",
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
    // nextStep();
    // You can send `formValues` to your server here
  };

  const handleBusinessCheckboxChange = (e: any) => {
    setBusiness(e.target.checked);

    console.log("Checkbox checked:", e.target.checked);
  };

  const handleProductivityCheckboxChange = (e: any) => {
    setProductivity(e.target.checked);
    console.log("Checkbox checked:", e.target.checked);
  };

  const handleStartupCheckboxChange = (e: any) => {
    setStartup(e.target.checked);
    console.log("Checkbox checked:", e.target.checked);
  };

  return (
    <div className="my-4 font-clarity">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="mt-2">
          <Label className="prname">Product Name</Label>
          <Input
            name="prname"
            type="text"
            placeholder="Product Name"
            value={formValues.prname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="shortDec">Short Description</Label>
          <Input
            name="shortDec"
            type="text"
            placeholder="Short Description"
            value={formValues.shortDec}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="category">Select category</Label>
          <Select
            name="category"
            value={formValues.category}
            onValueChange={(value) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                category: value,
              }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lawfirm">Lawfirm</SelectItem>
              <SelectItem value="category1">Category 1</SelectItem>
              <SelectItem value="category2">Category 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div></div>
        <div className="mt-4">
          <h3 className="text-sm">Select tags for product</h3>
          <div className="items-top flex space-x-2 mt-2">
            <Input
              type="checkbox"
              className=" w-5 h-5"
              checked={business}
              onChange={handleBusinessCheckboxChange}
            ></Input>
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="business"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Business
              </label>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="items-top flex space-x-2 mt-2">
            <Input
              type="checkbox"
              className=" w-5 h-5"
              checked={productivity}
              onChange={handleProductivityCheckboxChange}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="productivity"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Productivity
              </label>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="items-top flex space-x-2 mt-2">
            <Input
              type="checkbox"
              className=" w-5 h-5"
              checked={startup}
              onChange={handleStartupCheckboxChange}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="startups"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Startups
              </label>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Label className="prname">Company Name</Label>
          <Input
            name="cpname"
            type="text"
            placeholder="Company Name"
            value={formValues.cpname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label className="hqlocation">Headquarters</Label>
          <Input
            name="hqLocation"
            type="text"
            placeholder="Headquarters"
            value={formValues.hqLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label className="bemail">Business email</Label>
          <Input
            name="bemail"
            type="email"
            placeholder="Business Email"
            value={formValues.bemail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label className="foundedyr">Founded Year</Label>
          <Input
            name="foundedYr"
            type="text"
            placeholder="Founded Year"
            value={formValues.foundedYr}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label className="founders">Founders' names</Label>
          <Input
            name="founders"
            type="text"
            placeholder="Founders' Names separated by comma (,)"
            value={formValues.founders}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label className="bphone">Company Number</Label>
          <Input
            name="bphone"
            type="text"
            placeholder="Company Support Number"
            value={formValues.bphone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="status">Select Operation</Label>
          <Select
            name="status"
            value={formValues.status}
            onValueChange={(value) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                status: value,
              }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an operation status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="partial">Partial</SelectItem>
              <SelectItem value="partialclose">Partial Close</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-2">
          <Label htmlFor="companyType">Select Company Type</Label>
          <Select
            name="companyType"
            value={formValues.companyType}
            onValueChange={(value) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                companyType: value,
              }))
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="profit">For Profit</SelectItem>
              <SelectItem value="nprofit">Non Profit</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4">
          <Button onClick={nextStep} type="submit" className="bg-primary1">
            Save & Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProductInfo;
