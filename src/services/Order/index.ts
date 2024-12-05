"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";
import { IOrderPayload } from "@/src/types";

export const createOrder = async (payload: IOrderPayload[]) => {
  try {
    const { data } = await AxiosSecure.post("/orders/create-order", payload);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getMyOrders = async () => {
  try {
    const { data } = await AxiosSecure.get("/orders/my-order");
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const deleteMyOrder = async (id: string) => {
  try {
    const { data } = await AxiosSecure.delete(`/orders/my-order/${id}`);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
