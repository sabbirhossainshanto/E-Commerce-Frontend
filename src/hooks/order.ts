import { useMutation, useQuery } from "@tanstack/react-query";
import { IOrder, IOrderPayload, IResponse } from "../types";
import { createOrder, deleteMyOrder, getMyOrders } from "../services/Order";

export const useCreateOrder = () => {
  return useMutation<any, Error, IOrderPayload[]>({
    mutationKey: ["create-order"],
    mutationFn: async (payload) => await createOrder(payload),
  });
};
export const useGetMyOrder = () => {
  return useQuery<any, Error, IResponse<IOrder[]>>({
    queryKey: ["my-order"],
    queryFn: async () => await getMyOrders(),
  });
};
export const useDeleteMyOrder = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["delete-my-order"],
    mutationFn: async (id) => await deleteMyOrder(id),
  });
};
