import { StateType } from "types/types";
import { initialState } from "config/store";
import { Action } from "types/actions";

export const reducer = (state: StateType = initialState, action: Action) => {
  switch (action.type) {
    case "REMOTE_REQUEST": {
      return state;
    }
    case "SORT_BY": {
      return {
        ...state,
        sortBy: state.sortBy === "topstories" ? "newstories" : "topstories",
      };
    }

    default:
      return state;
  }
};
