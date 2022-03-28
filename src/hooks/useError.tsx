import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

export const useError = () => {
  return useSelector((state: RootState) => state.error);
};
