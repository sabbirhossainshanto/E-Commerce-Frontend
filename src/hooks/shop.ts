import { useMutation, useQuery } from "@tanstack/react-query";
import { IResponse, IShop } from "../types";
import { createMyShop, getMyShop, updateMyShop } from "../services/Shop";

export const useCreateMyShop = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["create-my-shop"],
    mutationFn: async (payload) => await createMyShop(payload),
  });
};
export const useGetMyShop = () => {
  return useQuery<any, Error, IResponse<IShop>>({
    queryKey: ["get-my-shop"],
    queryFn: async () => await getMyShop(),
  });
};
export const useUpdateMyShop = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["update-my-shop"],
    mutationFn: async (payload) => await updateMyShop(payload),
  });
};
