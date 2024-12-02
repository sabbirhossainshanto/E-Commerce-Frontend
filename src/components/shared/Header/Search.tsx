"use client";

import img from "@/src/assets/img";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  return (
    <div className="relative hidden lg:block">
      <div className="border border-[#FD3D57] rounded-md w-[535px] xl:w-[675px] flex">
        <div className="max-w-[250px] xl:max-w-[390px] h-auto flex-grow">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search product..."
            className="px-5 py-2.5 border-none text-sm w-full focus:ring-0 focus:outline-none leading-relaxed"
          />
        </div>
        {/* <!-- search btn --> */}
        <div className="w-[142px]">
          <button className="bg-secondary rounded-r-md w-full px-4 py-2.5 text-white text-base font-medium">
            Search
          </button>
        </div>
      </div>
      {/* Search Result */}
      <div
        className={`absolute left-0 top-14 w-full shadow bg-white rounded-b-[3px] z-10 transition-all duration-300  mt-0 ${searchTerm ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="h-auto overflow-auto">
          <Link
            href="product-view.html"
            className="flex items-center py-2 border-b border-[#ebebeb] hover:bg-[#f2f0f0] transition-all duration-300"
          >
            <div className="w-[90px] p-2.5">
              <Image
                height={100}
                width={100}
                src={img.logo}
                className="w-full h-[50px] object-contain"
                alt="product"
              />
            </div>
            <div className="pl-2">
              <h4 className="text-lg font-medium text-secondary mb-1.5">
                HP Pavilion 15
              </h4>
              <div className="mb-[5px] font-medium leading-[22px]">
                <span className="text-primary mr-[5px]">$45.00</span>
              </div>
            </div>
          </Link>
          <Link
            href="product-view.html"
            className="flex items-center py-2 hover:bg-[#f2f0f0] transition-all duration-300"
          >
            <div className="w-[90px] p-2.5">
              <Image
                height={100}
                width={100}
                src={img.logo}
                className="w-full h-[50px] object-contain"
                alt="product"
              />
            </div>
            <div className="pl-2">
              <h4 className="text-lg font-medium text-secondary mb-1.5">
                HP Pavilion 15
              </h4>
              <div className="mb-[5px] font-medium leading-[22px]">
                <span className="text-primary mr-[5px]">$45.00</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Search Result */}
    </div>
  );
};

export default Search;
