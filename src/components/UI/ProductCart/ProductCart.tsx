"use client";
import Swal from "sweetalert2";
import { useUser } from "@/src/context/user.provider";
import { useAddToCart, useGetMyCartProducts } from "@/src/hooks/cart";
import { IProduct } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import { useCreateCompare, useGetMyComparison } from "@/src/hooks/compare";

const ProductCart = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  const { user, setShowCompareModal } = useUser();
  const { data: comparisons, refetch: refetchComparison } =
    useGetMyComparison();
  const { mutate: addToCompare } = useCreateCompare();
  const { data: cartProduct, refetch: refetchCart } = useGetMyCartProducts();
  const { mutate: addToCart } = useAddToCart();

  const handleAddToCart = (product: IProduct & { type?: "replaceProduct" }) => {
    if (user?.email) {
      const isDifferentShop = cartProduct?.data?.find(
        (cart) => cart.product?.shopId !== product?.shopId
      );

      if (isDifferentShop) {
        Swal.fire({
          title: "Detect Different Shop",
          text: "Adding multiple shop product is not allowed! Replace the comparison product with the new product!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Replace",
        }).then((result) => {
          if (result.isConfirmed) {
            addToCart(
              { productId: product.id, quantity: 1, type: "replaceProduct" },
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
          }
        });
      } else {
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
      }
    } else {
      Swal.fire({
        title: "Please login",
        text: "Please login to add product in cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    }
  };

  const handleAddToCompare = (
    product: IProduct & { type?: "replaceProduct" }
  ) => {
    if (user?.email) {
      const isDifferentShop = comparisons?.data?.find(
        (compare) => compare.product?.shopId !== product?.shopId
      );

      if (isDifferentShop) {
        Swal.fire({
          title: "Detect Different Shop",
          text: "Adding multiple shop product is not allowed! Replace the cart with the new product!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Replace",
        }).then((result) => {
          if (result.isConfirmed) {
            addToCompare(
              { productId: product.id, type: "replaceProduct" },
              {
                onSuccess(data) {
                  if (data?.success) {
                    refetchComparison();
                    toast.success(data?.message);
                  } else {
                    toast.error(data?.message);
                  }
                },
              }
            );
          }
        });
      } else {
        addToCompare(
          { productId: product.id },
          {
            onSuccess(data) {
              if (data?.success) {
                refetchComparison();
                if (comparisons?.data?.length === 2) {
                  setShowCompareModal(true);
                }
                toast.success(data?.message);
              } else {
                toast.error(data?.message);
              }
            },
          }
        );
      }
    } else {
      Swal.fire({
        title: "Please login",
        text: "Please login to add product in cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    }
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
            <div className="flex items-center">
              {product?.isFlashSale && (
                <span className=" mr-[5px] font-medium">
                  {(
                    product?.price *
                    (1 - product?.discount_percentage / 100)
                  ).toFixed(2)}
                </span>
              )}

              <span
                className={` mr-[5px] font-medium ${product?.isFlashSale ? "line-through" : ""}`}
              >
                {product?.price}
              </span>
              {product?.isFlashSale && (
                <div>
                  {" "}
                  <CountdownTimer saleEndTime={product?.sale_end_time} />
                </div>
              )}
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

          <div className="absolute left-5 top-3 mt-[15px] group-hover:mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col gap-4">
            <button
              onClick={() => handleAddToCompare(product)}
              className="default_btn bg-secondary border-none hover:bg-white px-[15px]"
            >
              ADD TO COMPARE
            </button>
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
