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
import { TbCopyPlus, TbFidgetSpinner } from "react-icons/tb";
import {
  useAddToWishlist,
  useGetMyWishlistProducts,
} from "@/src/hooks/wishlist";
import { IoMdCart } from "react-icons/io";

const ProductCart = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  const { user, setShowCompareModal } = useUser();
  const { data: comparisons, refetch: refetchComparison } =
    useGetMyComparison();
  const {
    mutate: addToCompare,
    isPending: isComparisonPending,
    isSuccess: isComparisonSuccess,
  } = useCreateCompare();
  const { mutate: addToWishlist } = useAddToWishlist();
  const { refetch: refetchWishListProduct } = useGetMyWishlistProducts([]);
  const { data: cartProduct, refetch: refetchCart } = useGetMyCartProducts();
  const {
    mutate: addToCart,
    isPending: isCartPending,
    isSuccess: isCartSuccess,
  } = useAddToCart();

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
  const handleAddToWishlist = (product: IProduct) => {
    if (user?.email) {
      addToWishlist(
        { productId: product.id, quantity: 1 },
        {
          onSuccess(data) {
            if (data?.success) {
              refetchWishListProduct();
              toast.success(data?.message);
            } else {
              toast.error(data?.message);
            }
          },
        }
      );
    } else {
      Swal.fire({
        title: "Please login",
        text: "Please login to add product in wishlist!",
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
      <div className="rounded-[5px] overflow-hidden bg-white shadow-md">
        <div className="relative px-[30px] py-[30px] sm:py-5">
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
              onClick={() => handleAddToWishlist(product)}
              className="mx-2 h-10 w-10 bg-primary hover:bg-secondary  transition text-center text-white flex justify-center items-center rounded-full"
            >
              <CiHeart size={18} />
            </button>
          </div>
        </div>

        <div className="p-5 h-[220px] overflow-hidden relative">
          <div className="border-b-1 pb-5">
            <Link
              href={`/products/${product?.id}`}
              className="hover:text-secondary text-md hover:underline  font-medium mb-[5px] cursor-pointer"
            >
              {product?.name?.substring(0, 70)}
            </Link>
            <div className="flex items-center  text-secondary">
              {product?.isFlashSale && (
                <span className=" mr-[5px] font-medium">
                  $
                  {(
                    product?.price *
                    (1 - product?.discount_percentage / 100)
                  ).toFixed(2)}
                </span>
              )}

              <span
                className={` mr-[5px] font-medium ${product?.isFlashSale ? "line-through" : ""}`}
              >
                ${product?.price}
              </span>
              {product?.isFlashSale && (
                <div>
                  {" "}
                  <CountdownTimer saleEndTime={product?.sale_end_time} />
                </div>
              )}
            </div>
          </div>
          <div className="pt-5 flex flex-col  gap-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex items-center justify-center gap-5 bg-[#f5f6fc] text-[#3749bb] text-sm py-3 hover:bg-[#3749bb] hover:text-white transition-colors rounded-md font-medium"
            >
              <IoMdCart size={20} />
              {isCartPending && !isCartSuccess ? (
                <span className="flex items-center gap-2 justify-center text-base">
                  <span>Please Wait</span>{" "}
                  <TbFidgetSpinner className="animate-spin" />
                </span>
              ) : (
                <span> ADD TO CART</span>
              )}
            </button>
            <button
              onClick={() => handleAddToCompare(product)}
              className="flex items-center justify-center gap-5 bg-gray-100  text-sm py-3 hover:bg-gray-200  transition-colors rounded-md font-medium"
            >
              <TbCopyPlus size={18} />
              {isComparisonPending && !isComparisonSuccess ? (
                <span className="flex items-center gap-2 justify-center text-sm">
                  <span>Please Wait</span>{" "}
                  <TbFidgetSpinner className="animate-spin" />
                </span>
              ) : (
                <span> ADD TO COMPARE</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
