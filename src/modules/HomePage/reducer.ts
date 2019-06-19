import { StateType } from "types/types";
import { initialState } from "config/store";
import { Action } from "types/actions";

export const reducer = (state: StateType = initialState, action: Action) => {
  switch (action.type) {
    case "REMOTE_REQUEST": {
      return state;
    }
    case "CHANGE_SORT": {
      return {
        ...state,
        sortBy: action.url,
      };
    }

    default:
      return state;
  }
};
