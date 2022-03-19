import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

export const useLoading = () => {
  return useSelector((state: RootState) => state.loading);
};
