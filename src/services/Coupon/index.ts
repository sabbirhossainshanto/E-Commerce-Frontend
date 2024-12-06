"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";
import { ICoupon } from "@/src/types";

export const createCoupon = async (payload: Partial<ICoupon>) => {
  try {
    const { data } = await AxiosSecure.post("/coupons/create-coupon", payload);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getAllCoupons = async () => {
  try {
    const { data } = await AxiosSecure.get("/coupons");
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const deleteCoupon = async (id: string) => {
  try {
    const { data } = await AxiosSecure.delete(`/coupons/${id}`);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
