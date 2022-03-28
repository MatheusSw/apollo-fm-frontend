import { createModel } from "@rematch/core";
import { RootModel } from "./root";

export const loading = createModel<RootModel>()({
  state: false as boolean,
  reducers: {
    setLoading: (state, payload: boolean) => {
      return payload;
    },
  },
  effects: (dispatch) => ({
    toggleLoading(payload: boolean) {
      dispatch.loading.setLoading(payload);
    },
  }),
});
