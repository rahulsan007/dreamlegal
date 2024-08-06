"use client";
import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function NewVendor() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        companyName: "",
        
    });

    const handleChange = (e: any) => {
        setFormData({  
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    
  return (
    <div>
       <div className="font-clarity">
            <h2 className=" text-lg font-bold flex gap-4 items-center">
              <span className="text-primary1 text-xl">
                <TbListDetails />
              </span>
              Create new Vendor
            </h2>
           
            <div className=" px-5 py-4  rounded-md border shadow-sm w-full md:w-2/3">
              <form onSubmit={()=>{}} className=" w-full px-4 ">
                
                <div>
                  <Label className=" text-slate-600" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label className=" text-slate-600" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className=" mt-4">
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
                
                
                <Button
                  type="submit"
                  className="my-4 w-2/3 rounded-lg bg-primary1"
                >
                  Create Vendor
                </Button>
              </form>
            </div>
          </div>
    </div>
  );
}

export default NewVendor;
