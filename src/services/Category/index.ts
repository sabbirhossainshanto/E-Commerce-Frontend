"use server";

import { AxiosSecure } from "@/src/lib/AxiosSecure";

export const createCategory = async (payload: FormData) => {
  try {
    const { data } = await AxiosSecure.post(
      "/categories/create-category",
      payload
    );
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getAllCategories = async () => {
  try {
    const { data } = await AxiosSecure.get("/categories");
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const getSingleCategory = async (id: string) => {
  try {
    const { data } = await AxiosSecure.get(`/categories/${id}`);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const updateSingleCategory = async (payload: {
  id: string;
  formData: FormData;
}) => {
  try {
    const { data } = await AxiosSecure.patch(
      `/categories/${payload.id}`,
      payload.formData
    );
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const { data } = await AxiosSecure.delete(`/categories/${id}`);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
