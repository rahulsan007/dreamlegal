import { FaRegCircleCheck } from "react-icons/fa6";

function ProductPricingTable() {
  return (
    <div className="grid gap-3 row-gap-3 sm:row-gap-3  lg:grid-cols-3  font-clarity">
      <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
        <div className="mb-6">
          <div className="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
              <p className="text-sm font-bold tracking-wider uppercase">
                Personal use
              </p>
              <p className="text-xl font-extrabold">$12.99</p>
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary2">
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                strokeLinecap="round"
              >
                <path
                  d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="mb-2 font-bold tracking-wide">Features</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">10 deploys per day</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">10 GB of storage</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">Unlimited domains</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">SSL Certificates</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Book a Demo
          </a>
          <p className="text-sm text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
        <div className="mb-6">
          <div className="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
              <p className="text-sm font-bold tracking-wider uppercase">
                For your team
              </p>
              <p className="text-xl font-extrabold">$39</p>
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinecap="round"
              >
                <path
                  d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="mb-2 font-bold tracking-wide">Features</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">Unlimited deploys</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">
                  Up to 10 Team Members
                </p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">100 GB of starge</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">24/7 support</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">Global CDN</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Book a Demo
          </a>
          <p className="text-sm text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
        <div className="mb-6">
          <div className="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
              <p className="text-sm font-bold tracking-wider uppercase">
                For your team
              </p>
              <p className="text-xl font-extrabold">$39</p>
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinecap="round"
              >
                <path
                  d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                  fill="none"
                  stroke="currentColor"
                />
                <path
                  d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="mb-2 font-bold tracking-wide">Features</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">Unlimited deploys</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">
                  Up to 10 Team Members
                </p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">100 GB of starge</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">24/7 support</p>
              </li>
              <li className="flex items-center">
                <div className="mr-2">
                  <FaRegCircleCheck className="w-4 h-4 text-primary1" />
                </div>
                <p className="font-medium text-gray-800">Global CDN</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Book a Demo
          </a>
          <p className="text-sm text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPricingTable;
