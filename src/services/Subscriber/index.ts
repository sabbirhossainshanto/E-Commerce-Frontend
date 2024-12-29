"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";
import { TQueryParam } from "@/src/types";

export const createSubscriber = async (payload: { email: string }) => {
  try {
    const { data } = await AxiosSecure.post(
      "/subscriber/create-subscriber",
      payload
    );
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getAllSubscriber = async (query: TQueryParam[]) => {
  try {
    const params = new URLSearchParams();
    if (query?.length > 0) {
      query.forEach((item) => params.append(item.name, item.value as string));
    }
    const { data } = await AxiosSecure.get("/subscriber", { params });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
