import { useMutation, useQuery } from "@tanstack/react-query";
import { ICategories, ICoupon, IResponse } from "../types";
import { deleteCoupon, getSingleCategory } from "../services/Category";
import { createCoupon, getAllCoupons } from "../services/Coupon";

export const useCreateCoupon = () => {
  return useMutation<any, Error, Partial<ICoupon>>({
    mutationKey: ["create-coupon"],
    mutationFn: async (payload) => await createCoupon(payload),
  });
};

export const useGetAllCoupon = () => {
  return useQuery<any, Error, IResponse<ICoupon[]>>({
    queryKey: ["get-coupons"],
    queryFn: async () => await getAllCoupons(),
  });
};

export const useGetSingleCategory = (id: string) => {
  return useQuery<any, Error, IResponse<ICategories>>({
    queryKey: ["get-category", id],
    queryFn: async () => await getSingleCategory(id),
  });
};

export const useDeleteCoupon = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["delete-coupon"],
    mutationFn: async (id) => await deleteCoupon(id),
  });
};
