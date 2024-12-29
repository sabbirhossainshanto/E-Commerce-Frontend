"use client";
import { useGetMyWishlistProducts } from "@/src/hooks/wishlist";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Wishlist = () => {
  const { data } = useGetMyWishlistProducts([]);
  return (
    <Link href="/account/wishlist" className="relative flex-col items-center">
      <span className="text-white flex justify-center">
        <FaRegHeart size={25} />
      </span>
      <span className="text-white text-[11px] leading-[10px]">Wish List</span>
      {data?.data && data?.data?.length > 0 && (
        <span className="absolute bg-secondary -top-1 right-0 text-white text-[11px] w-[18px] h-[18px] leading-[18px] text-center rounded-full overflow-hidden">
          {data?.data?.length}
        </span>
      )}
    </Link>
  );
};

export default Wishlist;
