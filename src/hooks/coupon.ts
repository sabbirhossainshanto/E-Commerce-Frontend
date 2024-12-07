import { useMutation, useQuery } from "@tanstack/react-query";
import { ICoupon, IResponse } from "../types";

import {
  createCoupon,
  deleteCoupon,
  getAllCoupons,
  validateCoupon,
} from "../services/Coupon";

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
export const useValidateCoupon = () => {
  return useMutation<
    any,
    Error,
    {
      totalAmount: number;
      code: string;
    }
  >({
    mutationKey: ["validate-coupon"],
    mutationFn: async (payload) => await validateCoupon(payload),
  });
};

export const useDeleteCoupon = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["delete-coupon"],
    mutationFn: async (id) => await deleteCoupon(id),
  });
};
