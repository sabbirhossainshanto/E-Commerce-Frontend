"use client";

import { limit } from "@/src/const/const";
import { useGetAllShop } from "@/src/hooks/shop";
import { Pagination } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ShopPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllShop([
    { name: "limit", value: limit },
    { name: "page", value: page },
  ]);
  const meta = data?.meta;

  return (
    <div className="container pt-14">
      <h2 className="text-[22px] sm:text-[32px] font-medium ">Shops</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.data?.map((shop) => {
          return (
            <div
              key={shop?.id}
              className="bg-white shadow-md rounded-xl border overflow-hidden "
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  {shop?.shopLogo && (
                    <Image
                      alt="Fitness Freak"
                      src={shop?.shopLogo}
                      loading="lazy"
                      width={250}
                      height={250}
                      decoding="async"
                      data-nimg="1"
                      className="w-28 mx-auto rounded-full"
                      style={{ color: "transparent" }}
                    />
                  )}
                </div>
                <h2 className="text-lg font-semibold mb-1">{shop?.shopName}</h2>
                <p className="text-gray-600 text-sm mb-2 h-16 line-clamp-3">
                  {shop?.shopDetails}
                </p>
                <p className="text-gray-600 text-sm mb-2">{shop?.createdAt}</p>
                <div className="flex space-x-2 mt-auto">
                  {/* <button className="px-4 py-2 rounded bg-primary text-white">
                    Follow
                  </button> */}
                  <Link
                    className="bg-gray-800 text-white px-4 py-2 rounded"
                    href={`/shops/${shop?.id}`}
                  >
                    Visit Store
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {!isLoading && (
        <div className="my-10 flex justify-end">
          <Pagination
            loop
            showControls
            onChange={(page) => setPage(page)}
            page={page}
            total={meta?.total ? Math.ceil(meta?.total / limit) : 1}
          />
        </div>
      )}
    </div>
  );
};

export default ShopPage;
