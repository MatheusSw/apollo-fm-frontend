import { Models } from "@rematch/core";
import { auth } from "./auth";
import { error } from "./error";
import { loading } from "./loading";

export interface RootModel extends Models<RootModel> {
  auth: typeof auth;
  error: typeof error;
  loading: typeof loading;
}

export const models: RootModel = {
  auth,
  error,
  loading,
};
