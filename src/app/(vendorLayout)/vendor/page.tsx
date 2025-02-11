"use client";

import { useGetMyShop } from "@/src/hooks/shop";
import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import RecentOrder from "@/src/components/shared/vendor/RecentOrder/RecentOrder";

export default function VendorHomePage() {
  const { data } = useGetMyShop();

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="w-full">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-grow overflow-hidden">
                  <p className="text-sm font-medium text-gray-500 truncate mb-0">
                    Total Product
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    {data?.data?.products?.length}
                  </h4>
                  <Link
                    href={`/shops/${data?.data?.id}`}
                    className="text-blue-500 underline"
                  >
                    View All Product
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl text-green-600">
                    <AiFillProduct />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-grow overflow-hidden">
                  <p className="text-sm font-medium text-gray-500 truncate mb-0">
                    Total Order
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    {data?.data?.orders?.length}
                  </h4>
                  <Link
                    href={`/vendor/order-history`}
                    className="text-blue-500 underline"
                  >
                    View All Orders
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl text-green-600">
                    <AiFillProduct />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-grow overflow-hidden">
                  <p className="text-sm font-medium text-gray-500 truncate mb-0">
                    Total Followers
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                    {data?.data?.follower?.length}
                  </h4>
                  <Link
                    href={`/vendor/followers`}
                    className="text-blue-500 underline"
                  >
                    View All Followers
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl text-green-600">
                    <AiFillProduct />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="my-3 text-lg md:text-2xl font-medium">Recent Order</h1>
        <RecentOrder />
      </div>
    </div>
  );
}
