import { useMutation, useQuery } from "@tanstack/react-query";

import { getAllUser, updateUserRoleStatus } from "../services/User";
import { IFullUser, IResponse, IUpdateUserStatusRole } from "../types";

export const useGetAllUser = () => {
  return useQuery<any, Error, IResponse<IFullUser[]>>({
    queryKey: ["get-user"],
    queryFn: async () => await getAllUser(),
  });
};

export const useUpdateUserStatusRole = () => {
  return useMutation<any, Error, IUpdateUserStatusRole>({
    mutationKey: ["update-user-role-status"],
    mutationFn: async (payload) => await updateUserRoleStatus(payload),
  });
};
