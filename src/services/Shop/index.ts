"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";
import { IUpdateShopStatus } from "@/src/types";

export const createMyShop = async (payload: FormData) => {
  try {
    const { data } = await AxiosSecure.post("/shops/create-shop", payload);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getMyShop = async () => {
  try {
    const { data } = await AxiosSecure.get("/shops/my-shop");
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getSingleShop = async (id: string) => {
  try {
    const { data } = await AxiosSecure.get(`/shops/${id}`);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getAllShop = async () => {
  try {
    const { data } = await AxiosSecure.get("/shops");
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const updateMyShop = async (payload: FormData) => {
  try {
    const { data } = await AxiosSecure.patch("/shops/my-shop", payload);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const updateShopStatus = async (payload: IUpdateShopStatus) => {
  try {
    const { data } = await AxiosSecure.patch("/shops/status", payload);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
