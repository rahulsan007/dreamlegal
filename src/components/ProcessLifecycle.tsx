function ProcessLifecycle() {
  return (
    <div>
      <div className="relative grid gap-4 row-gap-4 mb-8 md:row-gap-4 lg:grid-cols-3 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between  ">
            <p className="text-sm font-bold leading-5 mb-2">Create</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded  text-primary1  bg-primary2">
              1
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between  ">
            <p className="text-sm font-bold leading-5 mb-2">Negotiate</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded  text-primary1  bg-primary2">
              2
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between  ">
            <p className="text-sm font-bold leading-5 mb-2">Authenticate</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded  text-primary1  bg-primary2">
              3
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="relative grid gap-4 row-gap-4 mb-8 md:row-gap-4 lg:grid-cols-3 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between  ">
            <p className="text-sm font-bold leading-5 mb-2">Execution</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded  text-primary1  bg-primary2">
              4
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between  ">
            <p className="text-sm font-bold leading-5 mb-2">Renew</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded  text-primary1  bg-primary2">
              5
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between  ">
            <p className="text-sm font-bold leading-5 mb-2">Moniter</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded  text-primary1  bg-primary2">
              6
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProcessLifecycle;
