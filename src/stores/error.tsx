import { createModel } from "@rematch/core";
import { RootModel } from "./root";

export const error = createModel<RootModel>()({
  state: false as boolean,
  reducers: {
    setError: (state, payload: boolean) => {
      return payload;
    },
  },
  effects: (dispatch) => ({
    toggleError(payload: boolean) {
      dispatch.error.toggleError(payload);
    },
  }),
});
