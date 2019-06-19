import { StateType } from "types/types";
import { initialState } from "config/store";
import { reducer } from "modules/HomePage/reducer";

export const rootReducer = (state: StateType = initialState, action: any) => {
  return reducer(state, action);
};
