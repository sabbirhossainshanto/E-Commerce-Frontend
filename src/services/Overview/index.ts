"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";

export const getOverview = async () => {
  try {
    const { data } = await AxiosSecure.get("/overview");
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
