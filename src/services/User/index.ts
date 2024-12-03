"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";
import { IUpdateUserStatusRole } from "@/src/types";

export const getAllUser = async () => {
  try {
    const { data } = await AxiosSecure.get("/users");
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const updateUserRoleStatus = async (payload: IUpdateUserStatusRole) => {
  try {
    const { data } = await AxiosSecure.patch(
      `/users/update/${payload.id}`,
      payload.data
    );
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
