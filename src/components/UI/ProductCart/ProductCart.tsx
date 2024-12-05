"use client";

import { useUser } from "@/src/context/user.provider";
import { useAddToCart, useGetMyCartProducts } from "@/src/hooks/cart";
import { IProduct } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";

const ProductCart = ({ product }: { product: IProduct }) => {
  const { user } = useUser();
  const { refetch: refetchCart } = useGetMyCartProducts();
  const { mutate: addToCart } = useAddToCart();
  const handleAddToCart = (product: IProduct) => {
    addToCart(
      { productId: product.id, quantity: 1 },
      {
        onSuccess(data) {
          if (data?.success) {
            refetchCart();
            toast.success(data?.message);
          } else {
            toast.error(data?.message);
          }
        },
      }
    );
  };

  return (
    <div className="w-full col-span-1 group">
      <div className="border border-[#DDDDDD] rounded-[5px] overflow-hidden">
        <div className="relative bg-[#f3f3f3] px-[30px] py-[30px] sm:py-5">
          <Image
            height={200}
            width={200}
            style={{ height: "200px", width: "200px" }}
            className="w-full  object-contain"
            src={product.images?.[0]}
            alt="product"
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#e5e5e58c] z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <Link
              href={`/products/${product?.id}`}
              className="mx-2 h-10 w-10 bg-primary hover:bg-secondary transition text-center text-white flex justify-center items-center rounded-full"
            >
              <IoEyeOutline size={18} />
            </Link>
            <button
              onClick={() => toast.warning("Wishlist feature coming soon!")}
              className="mx-2 h-10 w-10 bg-primary hover:bg-secondary  transition text-center text-white flex justify-center items-center rounded-full"
            >
              <CiHeart size={18} />
            </button>
          </div>
        </div>

        <div className="p-5 h-[125px] overflow-hidden relative">
          <h4 className="text-secondary text-lg font-medium mb-[5px]">
            {product?.name}
          </h4>

          <div>
            <div>
              <span className="text-primary mr-[5px] font-medium">
                {product?.price}
              </span>
              <span className="text-sm text-[#687188] line-through font-medium">
                {(product?.price + 15).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-start">
              <div className="flex items-center">
                <span className="text-[#F6BC3E]">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
                    ></path>
                  </svg>
                </span>
                <span className="text-[#F6BC3E]">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
                    ></path>
                  </svg>
                </span>
                <span className="text-[#F6BC3E]">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
                    ></path>
                  </svg>
                </span>
                <span className="text-[#F6BC3E]">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
                    ></path>
                  </svg>
                </span>
                <span className="text-[#F6BC3E]">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z"
                    ></path>
                  </svg>
                </span>
              </div>
              <p className="text-[13px] ml-[9px] text-[#687188]">(150)</p>

              <Link href={`/shops/${product?.shopId}`} className="ml-[9px]">
                {" "}
                <span className="underline text-rose-500">
                  {product?.shop?.shopName}
                </span>
              </Link>
            </div>
          </div>

          <div className="absolute left-5 top-14 mt-[15px] group-hover:mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <button
              onClick={() => handleAddToCart(product)}
              className="default_btn primary-color hover:bg-white px-[15px]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
