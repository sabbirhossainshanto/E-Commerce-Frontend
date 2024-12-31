import { useQuery } from "@tanstack/react-query";
import { IOverview, IResponse } from "../types";
import { getOverview } from "../services/Overview";

export const useGetOverview = () => {
  return useQuery<any, Error, IResponse<IOverview>>({
    queryKey: ["overview"],
    queryFn: async () => await getOverview(),
  });
};
