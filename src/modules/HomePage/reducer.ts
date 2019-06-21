import { StateType } from "types/types";
import { initialState } from "config/store";
import { Action } from "types/actions";

export const reducer = (state: StateType = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
