import React from 'react'

function VendorCardAdmin() {
  return (
    <div className='font-clarity border  rounded-md px-4 py-4 shadow'>
     <div className="flex justify-between items-center">
        <div>
            <h2 className="text-lg font-bold">Vendor Name</h2>
            <p className="text-sm text-slate-500">Vendor Email</p>

        </div>

        <div className='flex gap-3'>

            <button className="text-sm   bg-primary1 px-3 py-3 rounded-sm text-white">Edit</button>
            <button className='text-sm bg-red-500 px-3 py-3 rounded-sm text-white'>Delete</button>

        </div>
     </div>
    </div>
  )
}

export default VendorCardAdmin
