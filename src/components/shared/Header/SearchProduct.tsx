"use client";

import { useGetAllCategory } from "@/src/hooks/category";
import { useGetAllProducts } from "@/src/hooks/product";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const SearchProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data } = useGetAllCategory([]);
  const [searchTerm, setSearchTerm] = useState("");
  const payload = [{ name: "searchTerm", value: searchTerm }];
  if (selectedCategory) {
    payload.push({ name: "category", value: selectedCategory });
  }
  const { data: products, isLoading, isFetching } = useGetAllProducts(payload);
  const filterCategory = data?.data?.filter(
    (category) => category?.products?.length > 0
  );
  return (
    <div className="relative hidden lg:block">
      <div className="rounded-md w-[600px] h-[45px]  flex">
        <form className="hidden bg-white w-full lg:flex">
          <div className="relative flex items-center w-full border rounded-md">
            <div className="relative border-r">
              <select
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value === "All" ? null : e.target.value
                  )
                }
                name="categoryId"
                className="appearance-none bg-transparent pr-10 pl-[22px] py-2 text-base font-medium outline-none w-fit"
              >
                <option>All</option>
                {filterCategory &&
                  filterCategory?.map((category) => {
                    return (
                      <option key={category?.id} value={category?.name}>
                        {category?.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="I'm shopping for..."
              className="w-full bg-transparent py-2 pl-6 pr-[58px] text-base outline-none"
              type="search"
              name="searchTerm"
            />
            n
            <button
              type="button"
              className="absolute top-0 right-0 flex h-full w-[52px] items-center justify-center rounded-tr-md rounded-br-md border border-primary  bg-primary  text-white"
            >
              {(isLoading || isFetching) && searchTerm ? (
                <TbFidgetSpinner className="animate-spin" />
              ) : (
                <Search />
              )}
            </button>
          </div>
        </form>
      </div>
      {/* Search Result */}
      <div
        className={`absolute left-0 top-14 w-full shadow bg-white rounded-b-[3px] z-10 transition-all duration-300  mt-0 ${searchTerm?.length > 1 && products?.data && products?.data?.length > 0 ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="h-auto overflow-auto">
          {products?.data?.map((product) => {
            return (
              <Link
                onClick={() => setSearchTerm("")}
                key={product?.id}
                href={`/products/${product?.id}`}
                className="flex items-center py-2 border-b border-[#ebebeb] hover:bg-[#f2f0f0] transition-all duration-300"
              >
                <div className="w-[90px] p-2.5">
                  {product?.images?.length > 0 && (
                    <Image
                      height={100}
                      width={100}
                      src={product?.images[0]}
                      className="w-full h-[50px] object-contain"
                      alt="product"
                    />
                  )}
                </div>
                <div className="pl-2">
                  <h4 className="text-lg font-medium  mb-1.5">
                    {product?.name}
                  </h4>
                  <div className="mb-[5px] font-medium leading-[22px]">
                    <span className="text-primary mr-[5px]">
                      {product?.price}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Search Result */}
    </div>
  );
};

export default SearchProduct;
