"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { GoTrash } from "react-icons/go";
import { MdOutlineCompareArrows } from "react-icons/md";
import { ICompare } from "@/src/types/compare";
import Image from "next/image";
import { calculateDiscount } from "@/src/utils/calculateDiscount";
import { useAddToCart, useGetMyCartProducts } from "@/src/hooks/cart";
import { toast } from "sonner";
import { useUser } from "@/src/context/user.provider";
import { useDeleteComparison, useGetMyComparison } from "@/src/hooks/compare";
import { TbFidgetSpinner } from "react-icons/tb";

export default function Comparison({
  comparisons,
}: {
  comparisons: ICompare[];
}) {
  const { refetch: refetchComparison } = useGetMyComparison();
  const { showCompareModal, setShowCompareModal } = useUser();
  const {
    mutate: deleteComparison,
    isSuccess: isComparisonSuccess,
    isPending: isComparisonPending,
  } = useDeleteComparison();
  const { refetch: refetchCart } = useGetMyCartProducts();
  const {
    mutate: addToCart,
    isSuccess: isCartSuccess,
    isPending: isCartPending,
  } = useAddToCart();

  const handleAddToCart = (compare: ICompare) => {
    addToCart(
      { productId: compare.product?.id, quantity: 1 },
      {
        onSuccess(data) {
          if (data?.success) {
            deleteComparison(compare?.id, {
              onSuccess() {
                refetchComparison();
              },
            });
            refetchCart();
            toast.success(data?.message);
            setShowCompareModal(false);
          } else {
            toast.error(data?.message);
          }
        },
      }
    );
  };

  const handleDeleteComparison = (id: string) => {
    deleteComparison(id, {
      onSuccess(data) {
        toast.success(data?.message);
        refetchComparison();
      },
    });
  };
  return (
    <>
      <button onClick={() => setShowCompareModal(true)}>
        <div className="relative group hidden lg:block">
          <div className="text-white ml-5 relative block text-center cursor-pointer">
            <span className="text-white flex justify-center">
              <MdOutlineCompareArrows size={30} />
            </span>
            <span className="text-white text-[11px] leading-[10px]">
              Compare
            </span>

            <span className="absolute bg-primary -top-1 left-2 text-white text-[11px] w-[18px] h-[18px] leading-[18px] text-center rounded-full overflow-hidden">
              {comparisons?.length}
            </span>
          </div>
        </div>
      </button>

      <Modal
        size="5xl"
        isOpen={showCompareModal}
        onOpenChange={setShowCompareModal}
        placement="top-center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Comparison Product
              </ModalHeader>
              <ModalBody>
                {comparisons?.map((compare) => {
                  return (
                    <div
                      key={compare?.id}
                      className="md:flex justify-between items-center border rounded p-5 mt-2"
                    >
                      <div className="w-20 h-20">
                        <Image
                          height={100}
                          width={100}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          src={compare?.product?.images[0]}
                          alt="product"
                        />
                      </div>
                      <div className="mt-6 md:mt-0">
                        <p className="transition duration-300">
                          <h5>{compare?.product?.name}</h5>
                        </p>
                        <p className="mb-0">
                          Quantity:{" "}
                          <span className="">
                            {compare?.product?.inventory}
                          </span>
                        </p>
                        <span>
                          {" "}
                          {compare?.product?.isFlashSale
                            ? "Original Price"
                            : "Price"}
                          : {compare?.product?.price}
                        </span>
                        {compare?.product?.isFlashSale && (
                          <span>
                            {" "}
                            Discounted Price :{" "}
                            {calculateDiscount(
                              compare?.product?.price,
                              compare?.product?.discount_percentage
                            ).toFixed(2)}
                          </span>
                        )}
                      </div>

                      <div className="text-[15px]  font-medium mt-2 md:mt-0 flex items-center gap-5">
                        <button
                          onClick={() => handleAddToCart(compare)}
                          className="default_btn bg-secondary border-none hover:bg-white px-[15px]"
                        >
                          {isCartPending && !isCartSuccess ? (
                            <span className="flex items-center gap-2 justify-center text-base">
                              <span>Please Wait</span>{" "}
                              <TbFidgetSpinner className="animate-spin" />
                            </span>
                          ) : (
                            <span>ADD TO CART</span>
                          )}
                        </button>
                        <button
                          className="default_btn  text-white bg-primary"
                          onClick={() => handleDeleteComparison(compare.id)}
                        >
                          {isComparisonPending && !isComparisonSuccess ? (
                            <span className="flex items-center gap-2 justify-center text-base">
                              <span>Please Wait</span>{" "}
                              <TbFidgetSpinner className="animate-spin" />
                            </span>
                          ) : (
                            <span>
                              {" "}
                              <GoTrash size={17} />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
