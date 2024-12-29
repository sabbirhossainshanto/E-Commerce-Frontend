import { useMutation, useQuery } from "@tanstack/react-query";
import { IResponse, IShop, TQueryParam } from "../types";
import { getAllShop } from "../services/Shop";
import { createSubscriber } from "../services/Subscriber";

export const useCreateSubscriber = () => {
  return useMutation<any, Error, { email: string }>({
    mutationKey: ["create-subscriber"],
    mutationFn: async (payload) => await createSubscriber(payload),
  });
};

export const useGetAllSubscriber = (query: TQueryParam[]) => {
  return useQuery<any, Error, IResponse<IShop[]>>({
    queryKey: ["get-all-subscriber", query],
    queryFn: async () => await getAllShop(query),
  });
};
