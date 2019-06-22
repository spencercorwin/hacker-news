import { StateType } from "types/types";
import { initialState } from "config/store";
import { Action } from "types/actions";

export const reducer = (state: StateType = initialState, action: Action) => {
  switch (action.type) {
    case "GET_LIST":
      return { ...state, list: { ...state.list, isLoading: true } };
    case "RECEIVE_LIST":
      return { ...state, list: { isLoading: false, data: action.json } };
    case "GET_ARTICLES":
      return { ...state, articles: { ...state.articles, isLoading: true } };
    case "RECEIVE_ARTICLES":
      return { ...state, articles: { isLoading: false, data: action.json } };
    default:
      return state;
  }
};
