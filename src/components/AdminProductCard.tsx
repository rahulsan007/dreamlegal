import React from 'react'
import { GoPencil } from 'react-icons/go'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Button } from './ui/button'

function AdminProductCard({ id, image, title, description }: any) {
  return (
    <div>
      <div>
      <div className="w-full px-10 py-7 bg-secondary1 rounded-xl border shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 inline-flex flex-col md:flex-row gap-4">
            <img
              src={image}
              width={80}
              height={80}
              alt="logo"
              className="rounded-full w-20 h-20 object-cover"
            ></img>
            <div>
              <h3 className=" font-bold text-base">{title}</h3>
              <p className=" text-sm text-slate-500 mt-2">{description}</p>
              <div className=" flex gap-3 items-center mt-3 "></div>
            </div>
          </div>
          <div className="col-span-1 mt-2">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-center h-full ">
              <button
               
                className=" flex gap-2 rounded-full bg-primary1 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-gray-900 hover:gap-4"
              >
                Edit
                <GoPencil className=" text-xl" />
              </button>
              <Dialog>
                <DialogTrigger>
                  {" "}
                  <button className=" flex gap-2 rounded-full bg-red-500 text-white font-bold px-6 py-3 text-xs transition-all  w-fit items-center hover:bg-gray-900 hover:gap-4">
                    <FaRegTrashAlt className=" text-xl" />
                    Delete
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <Button variant={"destructive"}> Delete Permanetly</Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminProductCard
