import { apiClient } from "../clients/apiClient";

export const fetchUser = async () => {
  const { data } = await apiClient.get("api/user");
  return data;
};
