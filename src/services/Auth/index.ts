"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (payload: FieldValues) => {
  try {
    const { data } = await AxiosSecure.post("/auth/register", payload);
    cookies().set("accessToken", data?.data?.accessToken);
    cookies().set("refreshToken", data?.data?.refreshToken);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (payload: FieldValues) => {
  try {
    const { data } = await AxiosSecure.post("/auth/login", payload);
    cookies().set("accessToken", data?.data?.accessToken);
    cookies().set("refreshToken", data?.data?.refreshToken);
  } catch (error: any) {
    throw new Error(error);
  }
};
export const logOut = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decode = null;
  if (accessToken) {
    decode = await jwtDecode(accessToken);
    return {
      _id: decode?._id,
      name: decode?.name,
      email: decode?.email,
      mobileNumber: decode?.mobileNumber,
      role: decode?.role,
      status: decode?.status,
      iat: decode?.iat,
      exp: decode?.exp,
      profilePhoto: decode.profilePhoto,
    };
  }
  return decode;
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;
    const res = await AxiosSecure({
      url: "/auth/refreshToken",
      method: "POST",
      withCredentials: true,
      headers: {
        cookies: `refreshToken=${refreshToken}`,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error("Failed to get accessToken");
  }
};
