import { RootModel } from "./root";
import { createModel } from "@rematch/core";
import { AuthState } from "../types/AuthState";
import { User } from "../types/User";

export const auth = createModel<RootModel>()({
  state: {} as AuthState,
  reducers: {
    setUser: (state, payload: User) => {
      return { me: payload } as AuthState;
    },
    removeUser: () => {
      return { me: undefined } as AuthState;
    },
  },
  effects: (dispatch) => ({
    login(payload: User) {
      dispatch.auth.setUser(payload);
    },
    logout() {
      dispatch.auth.removeUser();
    },
  }),
});
