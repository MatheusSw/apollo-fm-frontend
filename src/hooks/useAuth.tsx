import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

export const useAuth = () => {
  return useSelector((state: RootState) => state.auth);
};
