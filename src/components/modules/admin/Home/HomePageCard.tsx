"use client";

import { IOverview } from "@/src/types";
import { User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CiShop } from "react-icons/ci";

const HomePageCard = ({ data }: { data: IOverview }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div className="w-full">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex-grow overflow-hidden">
                <p className="text-sm font-medium text-gray-500 truncate mb-0">
                  Total Shop
                </p>
              </div>
              {/* <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div> */}
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {data?.totalShop}
                </h4>
                <Link
                  href="/admin/manage-shop"
                  className="text-blue-500 underline"
                >
                  View All Shop
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <CiShop />
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
                  Active Shop
                </p>
              </div>
              {/* <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div> */}
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {data?.activeShop}
                </h4>
                <Link
                  href="/admin/manage-shop"
                  className="text-blue-500 underline"
                >
                  View All Shop
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <CiShop />
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
                  Blocked Shop
                </p>
              </div>
              {/* <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div> */}
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {data?.blockedShop}
                </h4>
                <Link
                  href="/admin/manage-shop"
                  className="text-blue-500 underline"
                >
                  View All Shop
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <CiShop />
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
                  Total User
                </p>
              </div>
              {/* <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div> */}
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {data?.totalUser}
                </h4>
                <Link
                  href="/admin/manage-user"
                  className="text-blue-500 underline"
                >
                  Manage User
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <User2 />
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
                  Active User
                </p>
              </div>
              {/* <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div> */}
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {data?.activeUser}
                </h4>
                <Link
                  href="/admin/manage-user"
                  className="text-blue-500 underline"
                >
                  Manage User
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <User2 />
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
                  Blocked
                </p>
              </div>
              {/* <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div> */}
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {data?.blockedUser}
                </h4>
                <Link
                  href="/admin/manage-user"
                  className="text-blue-500 underline"
                >
                  Manage User
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <User2 />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
