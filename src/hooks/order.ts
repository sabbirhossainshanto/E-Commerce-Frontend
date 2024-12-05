import { useMutation, useQuery } from "@tanstack/react-query";
import { IOrder, IOrderPayload, IResponse } from "../types";
import {
  createOrder,
  deleteMyOrder,
  getAllOrders,
  getMyOrders,
  updateOrderStatus,
} from "../services/Order";

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
export const useGetAllOrder = () => {
  return useQuery<any, Error, IResponse<IOrder[]>>({
    queryKey: ["all-order"],
    queryFn: async () => await getAllOrders(),
  });
};
export const useUpdateOrderStatus = () => {
  return useMutation<any, Error, { id: string; status: string }>({
    mutationKey: ["update-order"],
    mutationFn: async (payload) => await updateOrderStatus(payload),
  });
};
export const useDeleteMyOrder = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["delete-my-order"],
    mutationFn: async (id) => await deleteMyOrder(id),
  });
};
