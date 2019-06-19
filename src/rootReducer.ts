import { initialState } from "config/store";
import { reducer } from "modules/HomePage/reducer";

export const rootReducer = (state: any = initialState, action: any) => {
  return reducer(state, action);
};
