import Link from "next/link";
import React from "react";

const HomePageCard = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 gap-10">
      <div className="w-full">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <div className="flex-grow overflow-hidden">
                <p className="text-sm font-medium text-gray-500 truncate mb-0">
                  Total Earnings
                </p>
              </div>
              <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div>
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  $
                  <span className="counter-value" data-target="559.25">
                    559.25
                  </span>{" "}
                  k
                </h4>
                <Link href="/" className="text-blue-500 underline">
                  View net earnings
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <i className="bx bx-dollar-circle"></i>
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
                  Total Earnings
                </p>
              </div>
              <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div>
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  $
                  <span className="counter-value" data-target="559.25">
                    559.25
                  </span>{" "}
                  k
                </h4>
                <Link href="/" className="text-blue-500 underline">
                  View net earnings
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <i className="bx bx-dollar-circle"></i>
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
                  Total Earnings
                </p>
              </div>
              <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div>
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  $
                  <span className="counter-value" data-target="559.25">
                    559.25
                  </span>{" "}
                  k
                </h4>
                <Link href="/" className="text-blue-500 underline">
                  View net earnings
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <i className="bx bx-dollar-circle"></i>
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
                  Total Earnings
                </p>
              </div>
              <div className="flex-shrink-0">
                <h5 className="text-success text-sm mb-0">
                  <i className="ri-arrow-right-up-line text-lg align-middle"></i>{" "}
                  +16.24 %
                </h5>
              </div>
            </div>
            <div className="flex items-end justify-between mt-4">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  $
                  <span className="counter-value" data-target="559.25">
                    559.25
                  </span>{" "}
                  k
                </h4>
                <Link href="/" className="text-blue-500 underline">
                  View net earnings
                </Link>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl text-green-600">
                  <i className="bx bx-dollar-circle"></i>
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
