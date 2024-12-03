import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProduct,
  getMyProduct,
  getSingleProduct,
  updateProduct,
} from "../services/Product";
import { IProduct, IResponse } from "../types";

export const useCreateProduct = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["create-product"],
    mutationFn: async (payload) => await createProduct(payload),
  });
};
export const useGetMyProducts = () => {
  return useQuery<any, Error, IResponse<IProduct[]>>({
    queryKey: ["my-products"],
    queryFn: async () => await getMyProduct(),
  });
};
export const useGetSingleProduct = (id: string) => {
  return useQuery<any, Error, IResponse<IProduct>>({
    queryKey: ["single-product", id],
    queryFn: async () => await getSingleProduct(id),
  });
};
export const useUpdateProduct = () => {
  return useMutation<any, Error, { formData: FormData; id: string }>({
    mutationKey: ["update-products"],
    mutationFn: async (payload) => await updateProduct(payload),
  });
};
