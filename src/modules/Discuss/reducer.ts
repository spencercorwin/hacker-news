// import { StateType } from "types/types";
import { initialState } from "config/store";

export const discussReducer = (
  state: any = initialState.discuss,
  action: any
) => {
  switch (action.type) {
    case "DISCUSS::FETCH_ARTICLE_START":
      return { ...state, isLoading: true };
    case "DISCUSS::RECEIVE_ARTICLE":
      return { ...state, article: { ...action.json } };
    case "DISCUSS::REQUEST_COMMENTS":
      return { ...state, isLoading: true };
    case "DISCUSS::RECEIVE_COMMENTS":
      return { ...state, isLoading: false, comments: { ...action.json } };
    default:
      return state;
  }
};
