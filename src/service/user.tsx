import { queryClient } from "./queryClient";
import { callAPI } from "../constants/api";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  return queryClient.ensureQueryData({
    queryKey: ["users"],
    queryFn: async () => {
      return await callAPI.getListWithPaginate(API_URL);
    },
    staleTime: 1000 * 60 * 1,
  });
};

export const getUserDetail = async (userId: string) => {
  return queryClient.ensureQueryData({
    queryKey: ["user", userId],
    queryFn: async () => {
      return await callAPI.get(`${API_URL}/${userId}`);
    },
    staleTime: 1000 * 60 * 1,
  });
};
